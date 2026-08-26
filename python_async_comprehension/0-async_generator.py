#!/usr/bin/env python3
"""
This module contains an asynchronous generator coroutine.
"""

import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """
    Asynchronously loops 10 times, waiting 1 second per iteration,
    and yields a random floating-point number between 0 and 10.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
