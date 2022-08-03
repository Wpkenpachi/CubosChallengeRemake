# Coverage
| Statements                  | Branches                | Functions                 | Lines             |
| --------------------------- | ----------------------- | ------------------------- | ----------------- |
| ![Statements](https://img.shields.io/badge/statements-100%25-brightgreen.svg?style=flat) | ![Branches](https://img.shields.io/badge/branches-100%25-brightgreen.svg?style=flat) | ![Functions](https://img.shields.io/badge/functions-100%25-brightgreen.svg?style=flat) | ![Lines](https://img.shields.io/badge/lines-100%25-brightgreen.svg?style=flat) |

# Challenge
[Descrição do desafio](Challenge.md)

# To do

*Domain*
- Period 
    - validator method :heavy_check_mark:
    - unit tests
- Interval :heavy_check_mark:
    - validator method
    - unit tests
- Single Day Schedule :heavy_check_mark:
    - unit tests
- Daily Schedule :heavy_check_mark:
    - unit tests
- Weekly Schedule :heavy_check_mark:
    - unit tests

*Application*
- RegisterScheduleRule :x:
    - Conflicts Verifier (must verify if the schedule rule to be stored has conflicts with any existent registered rule)
    - unit tests
    - integration tests
- List Registered Schedule Rules :x:
    - unit tests
    - integration tests
- Delete Schedule Rule :x:
    - unit tests
    - integration tests
- List Schedule for a range of dates :x:
    - unit tests
    - integration tests

*Infra*
- InMemory Repositories :heavy_check_mark:
    - Schedule Repository
    - unit tests

- InFile Repositories :heavy_check_mark:
    - Schedule Repository
    - unit tests

- Http Api Server :x:
    - Post route for registering schedule rule
        - body request validator middleware
    - Get route for list registered schedule rules
    - Get route for list schedule for a range of dates
    - Delete route for removing some schedule rule