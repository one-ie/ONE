hi in this tutorial we're going to go
through what it looks like to integrate
rivet into a local environment of
another application so as background
rivet is the open source visual AI
programming environment and it makes
programming these AI agents with large
language models actually super fun
but one of the critical Parts about
actually creating these AI agents is
they need to fit into a the environment
of another application usually
so we're going to go through
this rivet example
uh
repository where we actually have
created kind of a small toy chat example
of what it looks like to integrate rivet
into another application we're actually
going to start from the very very
beginning so
let's go ahead and clone this Repository
you can see it's github.com Ironclad
slash rivet example
and if we come here and just get clone
and we're cloning the rivet example
CD into there and if you just look at
the instructions step one clone the
repository then npm install
and then we have to export the our open
AI API key I've already done that so
that I don't expose my API Key by
accident
and then we just run npm start
cool and just like that we have our
awesome chat application hi there how
can I help you today well what can you
help with
so our chat application is able to do a
few things right now it can do
calculations with a calculator play a
game of 24 and just chat with us in
general so let's take a look at actually
what this chat bot looks like
so you know open up rivet
and I'm going to navigate to my rivet
example project and in the repository
folder there's this chat.rivet project
over here
and if I open it up
I can see the four graphs that go into
my chatbot application on the left
with the initial chat
graph being the main graph that we we
start with and so if we look here we can
see this graph input
as well as three nodes over here
and then a bunch of other things happen
when we actually chat with the
application the chat messages are going
to go in as the input and then they're
going to flow from left to right
all the way through to this graph output
over here
so
let's go ahead and actually connect the
debugger so we've got it running
you'll notice there's this debugger URL
awkwardly put at the top of the chat
application we can just copy that
debugger URL
into
rivet so I just hit that dot dot dot
button hit remote debugger and then I
copy and paste my connection URL in
there
and just like that we're connected so I
can say something like
what's the weather like
and if I jump back into Rivet
you can see
the graph inputs
so what they're like I can even see my
previous uh messages
and you can see this flowed through
into our skill chooser
So based on the user's question about
the weather
we don't have a weather skill so let's
simply reply
and then you can see it goes into this
match statement over here
and it ran the simple reply
subgraph instead of the calculator or
play 24 sub graph
so in answered I apologize but I don't
have the ability to do real-time weather
information
so cool we've got the sample application
running we've got the rivet UI connected
to my local environment
let's actually see what else we can do
with it I'll go into the actual code in
a second but let me show a few few more
things off about rivet connected locally
into this environment
um so obviously if I'm interacting with
the chat UI I'm able to see what's going
on in the rivet UI
so let's actually trigger a calculation
one plus five times six
and now as you can see
the chat application chat or sorry the
calculator sub graph ran and gave us the
answer 31. and if I jump into the
calculator application you can see we
use uh the chat
or we use an llm GPT 3.5 in this case to
extract the computation one plus one
times six
based on the context
you can see um
what are we doing yeah here we go
what is the arithmetic formula I'm
asking you the compute answer in the
following format computation
uh and so it's actually pulling that out
but then the really cool thing is
actually calling an external function
here
and an external call
is something that's actually defined in
the environment of the local
app that you're running so let's
actually jump into that code so
I'm gonna open up visual studio code
and let's actually look at the structure
of this app so this is the Repository
folder root folder we have the client
side here under app it's
not super helpful to go through that
most all of the rivet interaction is
actually on the server side
and so the first thing to notice is in
package.json
you can see that we have a dependency on
Rivet node
and that's about it
and also draw your attention to Source
Services slash rivet Runner because
that's where most of the interactions
with rivet are you can see we've
imported a bunch of things from the
rivet node npm package
and then we have this key function here
run rivet graph and takes a graph ID
and some graph inputs
and the very first thing it does is it
actually loads a project from file
chat.project
and then it runs the graph
with inputs like the context of the
messages
all that to say we can also now
dynamically Define external functions so
I have this calculate function here that
takes in the string that the llm pulls
out
and then runs a pretty janky calculate
expression a call to actually get the
value as a number and then passes it
back to the rivet context to do
something with so this is really these
external functions
uh uh idea is actually really powerful
because you can really dynamically
Express these functions potentially add
access control so that you're not
relying on the llm to not divulge secret
API keys that it should not have access
to so
a pretty cool way to have your agent
interact directly with your application
it's also nice because since we
dynamically load the project from file
every time
as we're running this locally we can
actually
save changes to this and see them play
out in real time
as an example of this we have this kind
of like janky play 24
sub graph which
has the llm try to play the game at 24
where we give it
four numbers
and we're just going to try to come up
with an arithmetic operation that
creates the number 24. we chose this as
an example because it's really bad at
this game at least 3.5 is pretty bad at
this game so that is not 24.
so let's actually show how we can alter
the graph dynamically to
try to fix this or try to make the
chatbot better at playing the game 24.
well the first thing to notice is
actually
we're putting chat messages in here
you can see we said 5516 most recently
and then it's like running the graph to
completion it's kind of annoying that we
have to keep going back to this UI every
time we want to do that uh and it'd be
really nice if we could just hit this
run button Well turns out we can hit
just hit that run button
there we go it's it's running that and
what it's doing is
you can actually Define kind of like
static variables so I defined this five
five one six
uh chat message
as a default value on the graph input
and the main reason I did this uh is so
that I could hit this run button over
and over and iterate within the context
of the rivet UI rather than have to jump
back into the chat interface of our
application
so cool now I can just focus in on this
particular subgraph and try to improve
our chat Bots capabilities at playing
the game of 24.
so the first thing I'm going to do is
I'm going to try
um
I'm going to try to do some prompt
engineering so here's the main prompt we
say here are some numbers we kind of
insert the numbers and we say your tasks
to do this
uh first I'm going to try to give it
Chain of Thought reasoning so I'm going
to say first
explain your reasoning
cool and now hit save project saved and
again I'll hit run
and now if we go through this
cool it's actually trying out multiple
Solutions now
and it's coming out with a very very
confused set of things uh that's that's
really not an answer uh so that's not
great
uh
well let's let's try something slightly
different let's actually ask let's
actually alter this instead of using 3.5
turbo let us use gpt4
let's see if that does any better
six times five minus five plus one
okay uh well maybe I don't want to
actually do the math here to figure out
if it got that right so let's actually
extract that answer and put it into that
calculate function
so to do that I'm going to add
an extract with ragx node
so that I can get that kind of answer 6
times 5 minus five plus one
and pass it into my external call so
yeah sir
and then a capture group and Dot star
and then I'm going to
drag this response as the input to the
regex node
and that capture group should come out
as output one
so let's put that into the external call
and note here I'm just typing because I
know the name of the node that I want
to ask in there
and have it do the calculate functioning
all right again I have to hit save let's
run
our hbt4 is trying
and cool so close yet so far not the
number 24 but the number 26. so I could
continue to iterate here but I think we
can stop for now for this tutorial
because what we've covered just once
again now what we've covered here is
downloading the rivet example project
getting it set up npm installing it
giving it the open AI key it needs and
then
launching it and connecting it to the
river debugger
and then on top of that we've looked at
how external calls are actually
dynamically defined in the context of
the locally running environment and then
we did a little bit of prompt
engineering and graph tweaking to try to
get this chat bot to do a slightly
better job at playing the game of 24.
and
yeah
oh I think it actually got it this time
good job gpt4 so hopefully this helped
I'll do some more tutorials in a couple
of days that kind of go into maybe how
you would set up some of the other bits
of this project from scratch
but excited to see what you all do with
rivet thank you