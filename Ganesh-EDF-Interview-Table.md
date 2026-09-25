# EDF Energy — Lead Data Engineer (Nov 2025 – Present)

**Programme:** energy data platform modernisation — smart metering, generation assets, customer
analytics. **Team:** 6 data engineers. **Stack:** AWS + Databricks.

## The engagement

| | |
|---|---|
| **Requirement** | Land smart meter readings, generation asset telemetry, energy trading and customer consumption data from many unlike source systems, and turn it into the analytics the business runs on and the reporting Ofgem requires — traceably enough to be audited. Alongside it, make meter reads and grid events available to operations continuously rather than next morning. |
| **Data flow** | **Batch:** source systems → ingestion framework → **S3 raw** (schema enforced, partitioned) → **Bronze** → cleanse / enrich → **Silver** → business rules + reconciliation → **Gold** → regulatory reporting and commercial analytics<br>**Streaming:** meters / grid events → **Kafka** → PySpark Structured Streaming (event-time, checkpointed) → **Delta Lake** sink → operational dashboards |
| **Technologies** | Python · PySpark · Databricks · AWS Glue · Amazon S3 · **Apache Iceberg** (schema evolution, partitioning, upserts, validation) · **Apache Kafka** · Structured Streaming · **Delta Lake** · Medallion architecture |
| **What you owned** | The ingestion framework itself rather than one-off jobs; the transformation and reconciliation layers; the choice of Iceberg as the table format, which is what the Ofgem traceability story rests on; and the streaming path end to end. |
| **Scale** | **2.5 million** meter reads a day |

## How it is run

| | |
|---|---|
| **Orchestration** | Airflow DAGs on **MWAA** — task dependencies, sensors, retry policies, SLA alerts, parameterised Databricks jobs |
| **Infrastructure** | **Terraform** for Databricks workspaces, S3, IAM, Glue, Secrets Manager and networking — dev and prod provisioned identically |
| **Team and governance** | Mentor the 6 engineers on PySpark, SQL tuning, modelling and CI/CD — and own **production release governance**: code review, CI/CD, release validation, rollback readiness, prod approval |

## The 60-second version, if they ask "what do you do at EDF?"

Two sentences. *Heterogeneous source systems land in S3, move through Bronze, Silver and Gold on
Iceberg, and come out as the analytics the business runs on and the reporting Ofgem requires — 2.5
million meter reads a day.* Then: *and there's a streaming path alongside it, Kafka into
Structured Streaming into Delta, so operations see meter and grid events continuously.* Then stop.
"How it is run" only comes up if they ask how the platform is operated — and **release governance
is the lead-level signal**, so do not leave it out of a lead-level conversation.

## Likely follow-ups, and where the answer lives

| They will ask | Go to |
|---|---|
| "Why Iceberg and not just Delta?" | You run **both** — Iceberg for the batch analytical lake, Delta as the streaming sink. Be ready to say why that split rather than one format everywhere. This is the sharpest question in the set. |
| "How do you handle late-arriving meter reads?" | The streaming path — event-time processing and checkpointing. Watermarking and the late-data policy is the depth they are testing. |
| "What does Ofgem actually require?" | The batch path — traceability and history, plus the reconciliation step in Silver. |
| "How big is it?" | 2.5 million meter reads a day. Be ready for peak vs average, and what happens when the stream backs up. |
| "What did you change when you arrived?" | Weakest area — the CV describes what exists, not what you improved. Have one concrete before/after ready. |
| "How do you run releases?" | "How it is run". Rollback readiness is the part most candidates have not thought about; you have. |

## Two gaps worth closing before the interview

- **No numbers except the 2.5 million.** Orchestration and infrastructure would both be stronger with
  one figure each — pipelines orchestrated, environments provisioned, time saved per release cycle.
- **No failure story.** Every lead-level interview asks for one. Pick something real — a stream that
  backed up, a release that had to be rolled back — and know what you changed afterwards.
