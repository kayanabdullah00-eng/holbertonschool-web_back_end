#!/usr/bin/env python3
"""Module that contains a type-annotated to_kv function."""
from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return a tuple where the first element is k and the second is v squared as a float."""
    return (k, float(v ** 2))
