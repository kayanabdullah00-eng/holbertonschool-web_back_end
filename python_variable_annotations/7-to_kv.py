#!/usr/bin/env python3
"""Module that contains a type-annotated to_kv function."""
from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return a tuple of k and square of v."""
    return (k, float(v ** 2))
