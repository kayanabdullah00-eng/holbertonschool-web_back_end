#!/usr/bin/env python3
"""
Module 12-log_stats
Provides stats about Nginx logs stored in MongoDB.
"""
from pymongo import MongoClient


def log_stats():
    """
    Displays statistics about Nginx logs in MongoDB.
    """
    client = MongoClient('mongodb://127.0.0.1:27017')
    collection = client.logs.nginx

    # 1. Total logs count
    total_logs = collection.count_documents({})
    print("{} logs".format(total_logs))

    # 2. Methods count
    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        count = collection.count_documents({"method": method})
        print("\tmethod {}: {}".format(method, count))

    # 3. Specific status check count (method GET and path /status)
    status_check = collection.count_documents(
        {"method": "GET", "path": "/status"}
    )
    print("{} status check".format(status_check))


if __name__ == "__main__":
    log_stats()
