this brick breaker game was entirely
built by AI agents all of the ideas were
brainstormed by a game design agent all
of the code was written by a coding
agent and even the project management
was done by an agent okay I admit this
is just a very simple version of
breakout you have a paddle a ball and
some bricks and you can hit the bricks
with the ball the score counter isn't
even implemented and when the ball falls
off the screen it doesn't reset but it's
something the definition is still
emerging but an AI agent can be defined
as an llm call such as chat GPT feeding
back into itself with the addition that
the llm can also execute commands that
actually accomplish concrete changes
this particular agent was created in
Rivet The open- Source visual AI
programming environment it probably took
"somewhere around 1 to 2,000 calls to gp4"
to get to this point AI agents have a
variety of uses and are an emerging
field but the ability for an AI to take
actions reflect on those actions and
then take more actions is a powerful one
this project was not without its faults
the agents would constantly make
mistakes retread ground they had already
covered completely fail at fixing
compiler errors and sometimes just make
things worse a few times my patience ran
out and I went in and fixed the code for
them other times I nudged them in the
right direction with some verbal
guidance that's why I like to call this
a human assisted AI project in contrast
to the current AI assisted tools out
there like co-pilot and chat GP
overall I still call this project a
success because the agents were able to
create something resembling a game
there's no doubt in my mind that agents
and the Frameworks to build them will
rapidly get better over time for right
now let's take a look at how this agent
was implemented in Rivet on the left you
can see all of the graphs that compose
this game creator agent we'll go over
them all but let's start with the main
graph at the top which is the one that's
currently selected the agent is actually
composed of a number of sub agents and
agents students are allowed to execute
other agents the main graph is
considered the project manager agent its
main role is to determine what to do
next and then delegate everything to
other agents on the left side of the
graph we determine the current agent's
task this is a graph input which
defaults using an if else node to a
system message that the project manager
agent is given at the
start each agent is started with two
system messages the overall system
prompt one of the graphs and the agent's
task to accomplish the first message is
fed into a loop controller as the first
message in a series of messages being
sent to the llm the list of messages
goes into a trim chat messages node in
order to clip off messages from the
beginning until we get under the llms
context window this allows the agents to
run for any length of time where they
will simply forget older information
that they don't have room for we send
this list of messages and the shared
system prompt into the
llm after the call we feed the response
into the Run API command subgraph this
graph is responsible for running the
commands that the agent has called the
current chain of messages the lm's
response and the response from run API
command are all appended together and go
back into the loop controller for the
next iteration of the agentic
loop if the agent says a special call
system command task finished then we
return f for the continue port on the
loop controller that allows us to bail
out of the agent Loop and return to
whatever agent called
it let's take a look at the Run API
command subgraph this graph is
responsible for parsing llm responses
and extracting machine readable commands
from them it starts with two checks the
first checks for the phrase system
message in the llm response sometimes
the llm makes a mistake and tries to
imitate the system this catches that
that next it checks for the presence of
call system command twice despite the
system prompt stating that the agent can
only call one system command per call
even gp4 likes to sometimes call
multiple commands in one message this
catches that and returns an error
message instead of executing invalid
commands next we use a couple of code
blocks to parse the command the first
parses out the command being called and
the second parses out the arguments to
the command which are the block of text
after the call system command
message next the command name and
arguments go into a match node which has
each possible command the agent can run
using this we delegate the actual
execution of the command to subgraphs
only the subgraph that matches which
command the agent called will be
executed the arguments are passed into
the subgraph as its only
input there are also some checks for
invalid commands to return an error
message only one subgraph will be
executed so we pipe all of the results
into a coales node this will choose the
first non-null input which will be the
result of the subgraph that was
executed finally we take the output
combine it with some text to make it
more readable and return it back to the
agent as the command
output let's take a look at the commands
the agent is able to run read file is as
it says the agent can pass a single file
name and it will read the contents of
that file and return it all file names
are relative to a hard-coded base
directory which you can see is one of
the
subgraphs the read files command is the
same as read file but it can read
multiple files at once this is the one
the agent picks most of the
time no matter how many files are passed
in it will only return the first five of
them to avoid flooding the llm with more
text than it can handle the request user
feedback graph is simple the argument
text turns into a user input node which
asks the user a question and Returns the
user's answer the agent uses this to ask
for feedback about how the game's
progress is going because the agent
cannot actually play the game itself
this is a major part of the human
assisted part of the game
development the save to Shared memory
command lets the agent save a block of
text to a shared memory between all
agents its Effectiveness is debatable
but the command exists the shared memory
is included in the system prompt to all
agents the shell command command lets
the agent execute shell commands in the
configured directory for creating the
game this is as you can probably guess
dangerous and ill- advised however the
agent can use this to try to build the
game and get compiler errors which is
essential for it to self-correct
problems the show files command lets the
agent list all files in the configured
directory
it simply reads the directory and prints
out the file names one per line with a
little bit of helper text the right file
command is similarly dangerous to Shell
command but it is essential for this
project it lets the agent write a block
of text to a file the agent codes the
game by calling right file with the code
of the game the name of the file is on
the first line and the rest of the lines
are the contents of the file something
to note is that gp4 loves to put
markdown block around code of course we
don't want to include those markdown
blocks in the actual file so we use a
code node to strip them out and only
grab the code inside the pair of code
markers additionally there is a call at
the beginning of the graph to ask gp4 if
the extracted contents contain any
placeholder text GPD loves to write
things like this code Remains the Same
so if GPT detects any placeholder text
it will return an error message from the
command instructing the agent to try
again with the full contents of the file
I will say that this has been very
effective at correcting the agent when
it does something stupid the final
command is call agent this lets the
agent call any other agent the first
line is the agent name and there are
seven different agents that can be
called the rest of the text is the
request made to the agent those are
extracted at the beginning of the graph
here the agent name and arguments are
passed into a match node the same way as
run API command let's take a look at the
first agent the analyzer agent you'll
see that this is simply calling the main
graph with a custom system prompt that's
really all that most of the agents do
they have a fresh message history and a
tweaked system prompt to better instruct
the individual agents on how they behave
the analyzer agent specializes in
analyzing code and answering questions
about code and thus has its GPT
temperature set to zero so that it is
most likely to give the same answer
every time the brainstorming agent does
not call into the main agent Loop but
simply brainstorms ideas based on what
has been requested of it there's a check
at the beginning to have GPT answer yes
or no based on whether the input
arguments have enough context if the
answer is no an error message is given
back instead this lets the caller agent
try again making sure to include enough
context for the brainstorming agent to
be
effective the coder agent is designed to
be an expert coder but it also is just
calling the main agent loop with a
custom system prompt giving it
instruction on how it should be a coder
the designer agent is a graphic designer
that can create SVG art assets this one
wasn't really used in the demo but it's
there the documentation writer agent is
specialized in writing documentation
files for the game it's Effectiveness is
marginal because the documentation
becomes outdated as the game changes but
it's used fairly often by the project
manager agent this graph simply asks GPT
for what file it will be editing reads
that file in and then asks the agent to
write the new contents of the file this
way the agent doesn't clobber existing
documentation and prefers to append and
change the
documentation the overview agent is
specialized in giving overviews of the
project it reads files summarizes them
and Returns the summaries the project
manager agent loves to call this
agent the single file coder agent is
like the coder agent but is specialized
in making changes to one single file at
least that's the intention the coder
agent loves to ask the single file coder
agent to make changes to multiple files
however it still works fine editing
multiple files this agent does most of
the actual coding of the
game and that's it the entire game
creator agent was made from these graphs
and after hours of chugging away it made
a game the agent's Effectiveness
definitely slowed down the larger the
game got because every single change
could cause multiple files to need
changing and then the agent would get
entirely bogged down fixing or failing
to fix compiler errors there are
definitely improvements that could be
made to this agent but in terms of a
proof of concept I think it's pretty
cool and relatively successful the agent
is available at the URL in the
description for anyone to try out and
play with and tweak rivet is available
at ret. Ironclad app.com thanks for
watching