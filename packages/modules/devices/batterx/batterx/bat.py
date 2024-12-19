#!/usr/bin/env python3
from typing import Dict, Union

from dataclass_utils import dataclass_from_dict
from modules.devices.batterx.batterx.config import BatterXBatSetup
from modules.common.abstract_device import AbstractBat
from modules.common.component_state import BatState
from modules.common.component_type import ComponentDescriptor
from modules.common.fault_state import ComponentInfo, FaultState
from modules.common.simcount import SimCounter
from modules.common.store import get_bat_value_store


class BatterXBat(AbstractBat):
    def __init__(self, device_id: int, component_config: Union[Dict, BatterXBatSetup]) -> None:
        self.__device_id = device_id
        self.component_config = dataclass_from_dict(BatterXBatSetup, component_config)
        self.sim_counter = SimCounter(self.__device_id, self.component_config.id, prefix="speicher")
        self.store = get_bat_value_store(self.component_config.id)
        self.fault_state = FaultState(ComponentInfo.from_component_config(self.component_config))

    def update(self, resp: Dict) -> None:
        power = resp["1121"]["1"]
        soc = resp["1074"]["1"]
        imported, exported = self.sim_counter.sim_count(power)
        bat_state = BatState(
            power=power,
            soc=soc,
            imported=imported,
            exported=exported
        )
        self.store.set(bat_state)


component_descriptor = ComponentDescriptor(configuration_factory=BatterXBatSetup)