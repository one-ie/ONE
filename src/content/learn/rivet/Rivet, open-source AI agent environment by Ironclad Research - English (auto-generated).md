hi I'm Kai Chief Architect at Ironclad
and I'm super super excited to introduce
to you rivet rivet is the open- source
visual AI programming environment rivet
was born out of our needed ironcloud to
build complex AI agents using chains of
llm prompts so on the right you can see
rivet and on the left you can see a
sample chat application that's connected
uh via remote
debugger so let's dive in What can you
help
with so as you can see because it's
connected via remote debugger we can
actually observe what GPT 3.5 is coming
back with as it's coming back with it
this is super helpful for kind of
tracing the chain back to where it came
from and understanding areas where the
agent is failing areas where it's
brittle and quickly iterating on those
areas we can also do some really cool
things around uh external execution so
because rivet is uh executing in our
Local Host remote
environment uh we can actually make
external calls like calculate so here
we've actually given it the ability to
uh run calculations 1 plus 1 plus 1 + 5
and instead of relying on gpt3 or
whatever llm we're actually taking the
computation ask passing it into an
external call to run it programmatically
and defining these external calls is
actually super simple so here's uh the
code for our host application we're just
importing the rivet node mpm package and
then calling run graph on a project
that's loaded from a rivet project file
and then we can actually Define external
functions dynamically so here's the
calculate function it doesn't change
very much from run to run but let's
imagine you had a uh AI agent running in
an application where user permissions
were actually really important you could
actually dynamically Define the
functions that your AI agent had access
to based on the user permissions of the
user using the AI agent so this uh
external function functionality uh that
rivet has is something we're super
excited about and we're using a ton at
Ironclad uh but let's continue uh trying
to see what rivet can
do so we've gone ahead and taught this
AI agent how to play the game of 24 uh
in which you take four numbers and try
to combine them with arithmetic
operations to come up with a number
24 so here we
go 5 * 5 - 6 - 1 I'm pretty sure that's
not
24 uh so let's try and iterate from from
here cool
so we can edit the prompts or tweak them
uh directly in the not uh directly in
Rivet so let's uh we can see here are
some numbers and then a placeholder for
numbers which gets filled in and then
your task is to do blah blah blah let's
add Chain of Thought reasoning
first explain your
reasoning then output the answer in the
format below cool so we just saved it
and the updates to the graph actually
got loaded dynamically into our host
application so let's we could either try
that again directly from the chat
application or we could click this run
button and that's actually just going to
run uh the application or run that this
particular subgraph and so here we go we
have one possible solution and the
answer is 5 + 5 * 6 minus one again I'm
pretty sure that's not the right answer
but let's actually add some nodes to
actually figure that out so if we recall
we had this external call that could
calculate uh things like
that and now we need to extract this
calculation from the answer so we'll use
a reg X for
that and uh make
answer and then capture group.
star and we can just these
together output one goes here uh and we
can hit save and again we can just
execute the updated
graph um and there was an error
calculating oh because it added the
equals 50 uh let's try
again there we go uh so it is 50 uh so
as you can see we're running external
calls uh directly from Rivet we are uh
iterating on the prompt we're still not
getting it quite right so uh let's kind
of end this by switching over to gp4
instead of gpt3 and just seeing if this
works it's going to take a little bit
longer this time uh but we're here at
the end we could keep forward with uh
gpg 3.5 if we wanted to we can actually
compare the uh result of the external
call to a number using a comparison
formula
we can run that into a loop and we can
actually ask the llm to continue trying
until it gets something that's right so
all sorts of things are uh possible with
rivet uh we're excited for you to try it
out uh it has been gamechanging and
ironclads development of large language
models and AI agents uh so let us know
what you think thank
you