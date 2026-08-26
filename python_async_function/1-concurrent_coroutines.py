#!/usr/bin/env python3
"""
This module contains an asynchronous routine named wait_n that executes
multiple wait_random coroutines concurrently and returns sorted delays.
"""
import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawns wait_random n times with max_delay and returns the list of
    delays in ascending order based on their natural completion times.
    """
    tasks = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]
    delays = []

    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)

    return delays
