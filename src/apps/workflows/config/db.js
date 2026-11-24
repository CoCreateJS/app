/** External persistence workflow for CoCreateDB leaves. */
export default {
    method: "object.update",
    array: "workflows",
    upsert: true,
    object: [
        {
            _id: "6bdb00000000000000000010",
            name: "db.persist",
            enabled: true,
            description: "Persists CoCreateDB leaf snapshots to the configured AWS S3 bucket. Configure region, bucket and prefix on this workflow and AWS credentials on the aws API record.",
            provider: "aws",
            region: "",
            bucket: "",
            prefix: "cocreatedb",
            actions: {
                validateRegion: {
                    "$if.$workflow.region.$eq": {
                        "": { "$throw": "Configure an AWS region on the db.persist workflow." }
                    }
                },
                validateBucket: {
                    "$if.$workflow.bucket.$eq": {
                        "": { "$throw": "Configure an AWS bucket on the db.persist workflow." }
                    }
                },
                request: {
                    "$if.$data.method.$eq": {
                        "persistence.upsert": {
                            "$api.send": {
                                api: "aws",
                                method: "put",
                                endpoint: "db-upsert-leaf",
                                region: "$workflow.region",
                                bucket: "$workflow.bucket",
                                prefix: "$workflow.prefix",
                                uuid: "$data.persistence.uuid",
                                data: "$data.persistence"
                            }
                        },
                        "persistence.delete": {
                            "$api.send": {
                                api: "aws",
                                method: "delete",
                                endpoint: "db-delete-leaf",
                                region: "$workflow.region",
                                bucket: "$workflow.bucket",
                                prefix: "$workflow.prefix",
                                uuid: "$data.persistence.uuid"
                            }
                        },
                        "$else": { "$throw": "Unsupported CoCreateDB persistence method." }
                    }
                },
                checkResponse: {
                    "$if.$actions.request.error.$exists": {
                        "$true": {
                            "$if.$actions.request.error.length.$gt": {
                                "0": { "$throw": "AWS S3 persistence request failed." }
                            }
                        }
                    }
                }
            }
        }
    ]
};
