# Algorithm Challenge

## Scenario

Suppose there is a factory with a number of industrial machines. 
Each machine is always in exactly one of the following four states:
1. Off
2. Ready
3. Active
4. Faulted

The factory runs from 8AM to 5PM every day.

Every time a machine changes states, it sends us a message with the timestamp of the change, and the new state.

## Tasks

**Input:**
You are given a historical data set of all state change events from the previous 10 years.

### Task 1

For each calendar day:

1. For each machine, calculate the total duration in each state.
2. Compute the total duration where any machine is faulted.

### Task 2

Write a function that returns the state of a machine at an arbitrary time.

