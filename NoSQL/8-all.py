#!/usr/bin/env python3
"""
Module 8-all
Contains the function list_all to return all documents in a pymongo collection.
"""


def list_all(mongo_collection):
    """
    Lists all documents in a pymongo collection.

    :param mongo_collection: pymongo collection object
    :return: list of documents, or empty list if no document in collection
    """
    if mongo_collection is None:
        return []

    return list(mongo_collection.find())
