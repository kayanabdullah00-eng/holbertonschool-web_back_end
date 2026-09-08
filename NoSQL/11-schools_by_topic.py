#!/usr/bin/env python3
"""
Module 11-schools_by_topic
Contains the function schools_by_topic to filter schools by a topic.
"""


def schools_by_topic(mongo_collection, topic):
    """
    Returns the list of school having a specific topic.

    :param mongo_collection: pymongo collection object
    :param topic: string, topic searched
    :return: list of matching school documents
    """
    return list(mongo_collection.find({"topics": topic}))
