##
Problem Statement
I own a parking lot that can hold up to 'n' cars at any given point in time. Each slot is given a number starting at 1 increasing with increasing distance from the entry point in steps of one. I want to create an automated ticketing system that allows my customers to use my parking lot without human intervention.
When a car enters my parking lot, I want to have a ticket issued to the driver. The ticket issuing process includes us documenting the registration number (number plate) and the colour of the car and allocating an available parking slot to the car before actually handing over a ticket to the driver (we assume that our customers are nice enough to always park in the slots allocated to them). The customer should be allocated a parking slot which is nearest to the entry. At the exit the customer returns the ticket with the time the car was parked in the lot, which then marks the slot they were using as being available. Total parking charge should be calculated as per the parking time. Charge applicable is $10 for first 2 hours and $10 for every additional hour.
We interact with the system via a simple set of commands which produce a specific output. Please take a look at the example below, which includes all the commands
you need to support - they're self explanatory. The system should accept a filename as a parameter at the command prompt and read the commands from that file.



## Usage

- How to setup ?
You can run the setup script to setup on your system.If system is other than ubuntu and nodejs is not installed then you need to manually install nodejs and then run setup.
>> ./bin/setup
or
>> npm run setup (work only if nodejs installed)


- How to run app (before run setup) ?
if you want to run with input txt file then run by doing
>>./bin/parking_lot <input file_full_path>
If you want open interactive prompt.you can open by doing
>>./bin/parking_lot
or
>> npm start 


- How to Tets all test suits (before run setup)?
You can run the full suite from `parking_lot` by doing
>> ./bin/run_functional_specs
or
>> npm test


- How to Test specific test suits ?
You can run the specific test suit from `parking_lot` by doing
>> ./bin/run_functional_specs <test_suit_name>.js
or
>> npm test <test_suit_name>.js


- how to view all commits list ?
you can view all commit list by doing (NOTE: make sure git is installed on your system)
>> git log --reflog

## Development References

nodejs chid_process module to simulate interaction with CLI app.

- `spawnSync` method to initialize new pseudo child process with `command` as an input. `command` is string of command that you want to execute on the terminal (in this case, our parking lot app).
- `run_command_with_input` method that accept `command` as input. `command` is string of singe command or string representing list of commands separated by `\n` command that you want to execute on app.
- `run_command_with_argument`  method that accept `argument` as input. `argument` is array of command line argument that contain file path as one of the argument to execute commands on app from the file.



## Algorithm

`min heap` data structure used to park and remove car from parking lot. complexity for the operations are
- `park` : new car can be parked in slot in `o(log n)` time
- `leave` : new car can be removed and available slot list readjusted in `o(log n)` time


