hello and welcome back to yet another
rivet tutorial today we will be looking
at uh how to handle shed history in
Rivet as this is not a standard feature
and if you're just using a shed note
there is no history you have to do it
yourself first of all I want to
apologize quickly uh I'm traveling so
there's no camera also my microphone is
not very good it probably picks up the
clicking of the mouse and everything and
last but not least I'm also um yeah I'm
having a bit of a c so I think my voice
is not ideal and maybe yeah I'm might be
cutting a bit or something so sorry for
that but nonetheless let's go on uh we
will be looking at two examples today
because there's basically two main cases
one is a session history and I Define a
session now as a run of the project or
graph
so while we are running a graph we are
remembering
values and after yeah we are aborting or
we are finishing the graph and we
running it again we we forgot
everything this is I think the most
common use case that most people will
need and it's fairly simple to do and
there's a yeah much more complex but
also interesting use case about having a
permanent or persistent history um so
that even if you abort or stop the graph
or finish the graph and then run it
again you will still continue where you
left off all the conversation history is
still there so a bit like the um the
shets you can create with shet GPT where
you can just go back any time into yeah
into one of the chats you already have
and you can just type and continue and
everything is as it was
before okay so let's look a look at the
first one here the session
history
basically we are using the loop
controller here um there might be ways
to do all this without the loop control
controller and maybe I do another video
about it but for now for this case uh
let's we're using
it and there's two values that we need
to be passing around one let's maybe
start with data two is the most obvious
one we need our history our shed history
to be passed
around and for the first uh iteration
our default input down here is just our
system prompt so I have a pretty random
system prompt here you m help phone
friend the helper and so on
and this is going to the default port
and then for our consecutive
runs we have this input here and this is
the all messages output from the
chat this is the a very simple way to
retrieve all messages so far including
the system prompt and feed them
back please also note we are treating
the history as one big object because
it's a bit easier um we could separate
out the system prompt and send it
separately in here but there's there's
not really much of a benefit of
technically there is not different if we
feed it all here or if we feed it
separately into this into this part um
this is just as it makes it a bit easier
to handle for some people but basically
there is not even a distinction of those
two values in the in the API of jet GPT
and also underlying llms don't really
care they only need to know that there's
some system message at the beginning of
the shed history and this is what we are
also doing
here okay now the second um input we are
having is our um text for the user input
let me quickly run it to show you
basically this here and for the first
iteration we don't have any reply from
the AI yet so we need to put something
there I mean I just wrote enter your
message in the in the input here and
this is all default value that's being
used in the first run and then of
course once we are are going into a
second iteration we actually have a
response of the AI and we're using this
response field which
is uh in this case it's good it's not
returning a prompt but just the text
just the raw answer as a string so we
can directly feed it back and use it
here uh and some other cases actually
it's a bit annoying that it's not a
prompt but in this case it's
helpful okay so let's go back to our
execution and let's just send some
messages around let's say
hello and let's ask the AI how it is
today okay so that should be enough
let's bought it and now we can take a
look how this worked so for the first
iteration uh let's actually go back here
for the first iteration we first um went
into the user input and yes as we saw
enter your message was the text shown
and I answer with hello now we are
putting this into a a user input prompt
a user prompt sorry uh you can see here
the user wrote hello and now we need to
assemble our prompt that we will set
into the chat and in this case it's
pretty simple we are taking the default
value of input two or the first value
input so the system message and then our
message and both those together are
going to The Prompt and this is why the
AI wrote us hey there how can I assist
you today and now for the second
execution we are first of all here the
question or the the input for the user
input was the last response of the AI we
can see is here hey there how can I
assist you today and I wrote how are you
doing then again we are creating a new
user input and now our data 2 input now
output was the whole
message were all the messages from V
before um that's actually not correct
what it's showing here we need to C B
back was
this and in this assemble prompt here we
are uh putting it together we are
putting first the old messages uh in
front so in this message one input here
these three messages here have been the
messages from the previous run and now
we are adding our new user message
feeding this back to uh the chat and so
on so our history is growing and this
works
well okay so if you're only needing this
solution then yeah basically it's all
there is to it it's not too
complex um yeah it works fine
okay let's go to the more complex
example but I try to split it up a lot
so that it is not that
scary um so basically this is our graph
now as you can see um most some parts
look very much the same but there are
some extensions basically the subgraph
here is new we're not just inputting
those values as raw values and there is
also some logging part below here which
is doing some stuff we will get into
that
first thing I want to show you is yeah
basically there is this data Studio here
and I previously already red so let's
delete this so if you would not have run
this persistent or permanent uh shed
history graph yet you wouldn't see
nothing here and usually you could also
manually create data sets here and so on
um but now for now it's nothing here and
yeah basically those data sets here is
as like small databases we will see it
in a
second um um and maybe let's just run
this
one and as we can already see here now
now it automatically creates us a data
set for our shed history and it already
created our already locked or saved our
first message which is a system message
so it's type system and the message is
here yourand help friendly helper so
this is the same as before and now let's
just use this for now let's say hello
again
um the I is answering us let's go one
more
round and let's remember this is our
last message I'm doing great thanks for
asking let's abort the graph let's run
this again and we can see we are just
continuing where we left off last
response from the I was I'm doing great
thanks for asking and now we can
immediately jump back into our
conversation and we can also see this
here our data set now has all the
additional messages it has my hello the
response of the AI my next message and
the last message so this is now a
permanent data
storage where is it saved uh not in this
project file itself but a rivet is
creating um an additional file so
there's now if you would look into the
folder of your project there's not just
a rivet uh- project file there's also a
rivet Dash data file so if you want to
share data with someone and the project
you need to copy both files
around um and also if if you want to
manipulate the data here you can for
example just delete the whole data set
you can delete separate messages you can
insert data you can also play around in
here oops sorry what why is it gone now
huh this was this is a bit odd I hope
this is a let's see is this is a display
bug or is it no no I I don't know I
deleted an accident but that's
fine
um okay first of all I also created a
subgraph which can do the clearing of
the message history so now we have the
one message in the again because I was
running it but we can also just run this
one here B
first and now we have no messages in
here so this is uh I created a small
graph that helps you to clear everything
out so you could also connect this as a
subgraph um at some point in your
project um yeah if you want to get rid
of the history or to manually run it if
you don't want to go to the data Studio
each time you can just run this
graph okay but so much about that let's
get uh take a look at this graph here
and let's check it out let's do one run
and let's not really do anything yet
just want to create some data for now we
can look
at
and basically lots of things are are the
same let's first look at that so we
still have our inputs here system prompt
and our default user input and we have
our shed in uh shed Loop here the shed
Loop is pretty much it has still has the
same inputs there is the last response
and the shed history and then there's
only something also connect to the
continue Port this is more or less a
workaround because the loop controller
is behaving a bit funny uh I will
explain it when we come to it but
besides that this is all the same as you
can see here we have the user input we
are putting this into the prompt we're
assembling our prompt this is going to
the shed and now all this is is going
back into our input for data one and our
input for data 2 same game nothing
inside this Loop has changed in any yeah
uh in
anyway what has changed is is this part
here so we are putting our default user
instructions into a subgraph and what we
are expecting as an output is the shat
history and the last
response let's take a look
so this graph here is handling all that
and it is also calling two smaller
subgraphs as well actually third one
down here but it's not that
complicated so let's just look here
first of all what we are doing is we are
creating our data set so this table
here because if we don't have a table we
will get errors if we try to get data
from the table if we try to write to the
table and so on so this is something we
always need to do first
and as you can see this is also
happening before we are trying to get
messages so there's the second one is
trying to get messages and there is a
connection from this output to this
input let's take a small look into this
uh table here into this subgraph here
it's super simple we are creating um
data set which has chat history as data
set ID and name you could separate those
values and give ID some random number
number or whatever you like but you can
also name it the same and then we
actually don't care the slightest about
the output but we are creating a fake
output called go just so that we can
know when the subgraph finished running
and now we can use this as an input for
um we can use this as an input for our
getap messages subgraph so let's go
there so basically once this is being
triggered this one is being run after
the data set was
created H and also one more note um the
good thing about this subgraph is if the
data set is already existing it just
does nothing it just runs successfully
and nothing changes so it's we don't
need any complicated if the data set
already exists and do not create it and
stuff like that we can just create it
all the time and nothing bad is
happening so now we are trying to read
the messages and again this input here
is just a fake input which we just use
to know that only if this gets a value
this subgraph is being run so we are not
connecting the output because we don't
care what we are doing here is um also
this part is fairly simple we are um
asking for um the contents of the shat
history so we actually make uh we could
have selected our chat history here but
that doesn't work if you don't have
created yet so we need to make this
Dynamic by adding this checkbox and
we're inserting the name of it for the
ID actually of it here and then we are
reading the data set
and handling it and at the moment we
don't have any history so there's
nothing to see here we have zero
output um so let's go back for the
moment um here to the
subgraph and now this subgraph is doing
yeah three different things first of all
it checks if uh the history already
exists which is actually this one
here so we are just doing me you can see
at the moment it's empty so it's
returning nothing the get messages
function so we're putting this into an
if here and at the moment this is
false and if it's false we are just
using our system our instructions we are
putting this into a system prompt as you
can see here and then we are assembling
a
prompt um I mean now it's an array of
prompts but it's just one
prompt um so we just bring it to the
same format as a full shed history would
be and we are put putting this in this
if else so if this if condition is false
if there's no history we are returning
the system prompt and that is what we
are doing here and now this goes to the
output of the chat history so for now we
don't have a history so we are returning
the system
prompt and then we kind of do the same
for our uh last response or default user
input uh check so we are having an if
again if there is a
history then we would get the last
message from the back of the his from
the back of the array and we would
extract only the message because for the
user input we don't need to know what
type it is and all those addition
information we just need the message and
if there is a history we would use this
value if there is no history we are
using the default user input here and
for now that means we were also just
returning our enter your message
text so this way we now have a check
that checks if there's history and yes
if yes return return it or just return
our two default value same as
before and then last but not least we
need to start writing information or
every single message to the data set
and this um is being done here um of
course we um so basically as you can see
here we have been logging the system
prompt and of course we only want to
lock this one single time so again we
have an if check for the um chat history
and if it
exists we actually doing nothing because
we already locked it previously but if
it doesn't exist we are putting our
system prompt in as a value and uh the
false Port is connecting to our subgraph
which is a pending messages to the data
set let's take a short look into
that so now we are getting this system
prompt in here we are are
um um changing it to a Json object we
cannot really see it here but this is
now a Json string so basically like it's
Json stringify format in in like
JavaScript or something like that and we
are adding that into the data for our
yeah for pining it to a data set into
the data port and again we are we are
referencing the data set ID here we also
need to make the check mark the check
mark here and now it's being saved as a
data set and as we can see we didn't
give it an ID so it was automatically
assigned one and we have the data here
and as I said this is string ify Jon we
can see it here
now so it's it's usually a good idea to
to stringify information that you want
to be safe because yeah otherwise the
data Studio has some U behaviors like it
will automatically put arrays um of data
into separate columns and so on and may
you may not want it and also in this
case we don't need it we can just save
all the information in one separate
column
okay now let's we are basic nearly
finished looking at this let's just
clear it one more time so now our is
empty let's run one or two uh yeah let's
run it a bit to have some history so
hello and ask a
question okay this is good enough and
now let's take one more look into the
into the subgraph now um we had a chat
history so basically this if
condition um okay sorry we need to run
one more time now to see
this okay now for our for our second run
we had uh we have a chat history so
basically this get messages is now
returning our chat history you can see
it
here and let's go one second into it um
now we also were able to to yeah we were
loading the data set we got values as
you can see here we got like an data
with an array in and then there's our
Jon stringify data for the messages in
here and to return to um yeah extract um
the proper data and um return it as a
chat message object I um used the code
node in this uh case because it was a
bit hard to do it with the inbuild nodes
um took me like four five noes and was
pretty confusing so in this case we
using a code node once which is just
extracting uh which is finding the data
key and then also the first entry in the
array in there and it's it's returning
this as a chat message array of chat
messages so this is actually what you
get if you are assembling a prompt then
you're getting use this note then you're
getting an array of chat messages and as
we can already see here the um rivet
also can clearly see the data type now
as it's adding the colors and all the
formatting so this works well and we are
putting out in in the proper format so
that it can be
used and now um the same down here for
fetching the last response we can
actually this is actually true now
because we have a chat history so we are
popping the last message from the back
which is this here type assistant
message I'm doing great and now we are
getting just the message of it I'm doing
great thanks for asking
and returning this as the last response
and all of this is running
fine so there's only one last thing to
look at
now for this one I will do another run
um I will just ask one question because
I don't really care but I just want some
data in the loop okay now we have a full
run and we have data in
here um there is this logging part down
below here and what this is doing is
very simple we are when we are creating
the user prompt we also want this in our
data set so we are also connecting the
output of the user prompt to our append
message
subgraph and as we can see here this
ends up in creating a new message and
then we also need to lock the response
of the AI and as I said previously this
is not automatically creating a proper
prompt this is just returning text so we
also need to send this into a prompt
from um type
assistant and then we also need to lock
that and now last but not least there's
this final issue
here I did not connect this at
first so basically it looked like this
and now this was off not working why was
it not working because the loop
controller already went into the next
iteration and somehow cancelled this
because it did not know that this is
kind of a dead end you see this runs
from here to here to here or from here
and then it just stops and the loop
controller does not like dead ends you
need to reconnect all your um graphs
somehow so again we're using like some
fake output like continue because we
don't even care about the value and in
this case we're just using the continue
Port because this is not really doing
anything unless we put a false value in
there and then it would use uh cause the
break condition here but we can just put
something in and this fixes this
issue yeah and basically that's all of
it um as always you will find the files
for this in the description I hope this
was helpful um please give me a feedback
and also tell me what you like to see in
the future and maybe you have simpler
solutions for this this would also be
very interesting and I like to do
another video about this so thank you
very much and stay
tuned