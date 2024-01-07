hey everyone in this video we're going
to look at this cool app called rivet
which allows you to build GPT powered
apps using visual scripting it's pretty
cool somebody from Discord recommended
it and it's really intuitive to use and
it's powerful you can even build agents
with it we're going to take a look at
this program that I built which I also
have the python code for we're going to
review both of them we'll also look at
how we can install rivet uh and I'm
going to give you a quick crash course
on what this program does is it takes in
this it takes in this strategy tower
defense game strategy the game
description which I created using the
communicated communicating swarm
intelligence code that I uh showcase and
the communicating swarm intelligence
video you can find this at my website
e.li or at my YouTube channel so it
takes in this description of the game
then we have a system message and a user
message and we are generating 10
parallel responses from GPT using the N
parameter and then we are pending it to
a data set which is going to a CSV file
let's actually run this all I have to do
is just click run and here we go we are
running we are using gp4 in this case as
you see now uh responses are generated
in parallel you can also view this at
the chat
viewer while this is ongoing I'll tell
you this is some cool features such as
prompt designer you can add message is
assistant system it also supports
function calling can design tests can
view your chats and it is a data Studio
which we will see once this graph runs
as you see it's still running we will
have everything in our data set which we
will export to a CSV file okay it is
done now we can view it everything's
added in a single row is columns and at
the end we have this export data set
option I'm just going to click that and
it will uh save it to Tower Defense CSV
save it y now we have our Tower Defense
CSV we can actually replicate the same
process with this python file we're
going to talk about this right later in
the video uh that graph equates about 85
lines of python code we also have some
other files this code uh runs the
extracts the code from the Tower Defense
CSV file and saves it into individual
files under this code files if if it can
manage that and the third file which is
the test code file actually runs it runs
each code for 5 seconds unless there's
an error and it asks us for our feedback
for example this one allows us to put
Towers but that's it after 5 Seconds it
stops it asks for our approval do we
approve the code no we don't when we say
no it deletes that file we say yes it'll
move it to the working code folder which
is currently
empty so I don't think this one ran
right let's see the third one didn't run
I believe this one allows us just put
some Towers interesting it kind of works
so they say yes so now we have
transferred it to here let's see oh we
kind of missed that one let's just say
no here we go this is interesting oh wow
this works quite well let's say yes so
you get to see the idea right we say no
and it's just it's an automated system
essentially which allows us to run
through code quickly this one no
and this the last one there's nothing
you can oh there we go this kind of
works say yes that's it so we went
through all the files and we have three
tower defense game that some somewhat
works right so we can actually work with
these the file for the graph which you
can use yourself and the rivet app which
is actually a desktop app you can
install on your computer it will be
available at my patreon for free uh it's
a public post and the python code files
will along with the uh rivet graph will
be available in the P tier at my patreon
uh where I have over 150 exciting
projects take a look at it see if you
like it and thank you for your support
link will be in the description you can
also find all my videos 200 plus videos
quickly at my website www. e.li take a
look at that as well you can find the
code download Links at patreon there as
well so let's take a look at rivet and
how it works let's first start by
recreating the graph okay so rivet works
by graphs you can create graphs and you
can actually call this you can make this
entire graph a subgraph and call it from
another graph so it really offers uh
quite a lot of
possibilities let's just start so to to
to get these nodes all you have to do is
just right click and search for from a
bunch of nodes like text nodes and
there's extract with you know chat for
open a chat completions there's a sample
prompt you can trim chat messages with a
within a loop I'll just quickly go over
it I mean I'm not I'm just going to
quickly explain what this how we do this
right we're going to we can also search
we need a read file node so I'm just
going to replicate it right under here
okay we can give it a path right we can
click on that can click on settings and
it wants it wants to use current path
taking an input we don't want that we're
going to turn it off so it gives us an
ability to browse just going to point it
to the outline which we have which is a
text file so now we're done with this we
can close this and we need a prompt one
for system one for user going to right
click and I'm going to search for prompt
okay and I'm going to do that again
search for prompt okay now we have two
prompts I'm going to click on the
setting set this one to system okay and
click on this and set this one to
user I'm going to go here and copy this
system message and then paste it uh into
into this one and then the user
message uh let me copy this into this
one now see you can take Dynamic inputs
which is specified by curly bra double
curly brackets so what this does is
right this is interesting so this
content that we are reading from read
file we can actually connect it to this
input so whatever this input is now this
right here our variable so that's pretty
cool right so now we have a system
message and a prompt now next we need
the chat uh so we can search for
chat uh if you look at the settings you
can set select your model from here set
your parameters such as temperature all
of that good stuff and we also have GPT
functions for function calling and then
the advanced options number of choices
here actually I'm going to set this to
10 okay so this way we're going to
produce 10 simultaneous Alternatives
from this prompt I'm going to take the
system prompt and just plug it into the
system prompt and the regular prompt
over here so now we we can just set it
to GPT 3.5 to 16k for now so it'll be
faster next one is a Penta data
set I'm just going to find that node
here we go so response is going to
connect to its data if you go to it
settings which so I already have a a
data set that I created Power Defense if
you don't already have a data set then
you can search for create data set okay
and here you can actually create a data
set by calling a text input box and
giving it a name for example Power
Defense
to okay and connecting this to its data
set name okay and when you run this you
should create a new data set and it
should be available within your graph
because I have already done this let's
actually try if I'm now going to just I
can right click on noes and say run to
here let's do that and this is running
as you see and it's done so if you go to
our data Studio we can see that we have
now two data sets one is the one that we
had and another one Tower Defense to
okay and what I did was is I created
these two nodes and clicked on the
second one and clicked run to here
meaning we just ran these two Okay can
right click and delete the nodes too
since we have already created that data
set and now I can go here and select
that second one if I wanted and then I
can see I can select either one through
here as well by going to the data Studio
anyway this is pretty much it see as you
can see we have replicated it you can
move around with your left Mouse click
zoom in and zoom out with your scroll
wheel so we can now completely actually
delete these and then run it again and
then this should actually produce the
same result There Is No undo in Rivet
currently and you have to continuously
save it you can do that through file and
save your project okay just remember
that also please let me know in the
comments if you're enjoying this I want
to make more complex videos on this you
can build agents and all kinds of stuff
I really want to explore this rivet and
I'm having quite a lot of fun with it
and if you like it too uh let me know
and I'll continue making some more
videos on this anyway uh so like you see
this this is now we have two graphs
under a single graph right one of them
uses the tower defense and the other one
another one uses Tower Defense two data
set we can actually run these in
parallel so now we actually generating
responses one from GPT 4 one from GPT
3.5 turbo as you see these are being
generated in real time rivet can be slow
at times as you see it's lagging a
little bit but it's understandable we
are generating 10 responses from each
each and through a two
graph once this is done our data sets is
going to get
populated I'll be right back when it's
done okay our I believe our GPT 3.5 is
done and when we go to our data Studio
we see that Tower Defense to is now
populated we can export this or clear
the data can import data to replace this
data so gp4 is still running but when
it's done it's going to populate the
Tower Defense the first to defense data
set and then we we can simply export
that data set and then save it to a CSV
file and I've already done that and then
you will have your CSV file so this is
how rivet Works in a nutshell and the
second one is done too and as we see
that one is populated as well just keep
in mind that they're appended as columns
each so what single row and multiple
columns let's take a look at the python
code next so to get rivet you go to Riv
. Ironclad app.com I'll put the link in
the description I you just download it I
think it's only available for Windows
currently when you click it it'll
download after that you'll have to run
that setup and the thing is when you run
it right when you run
this it's going to give you this it
might give you this warning it says
Defender so I guess it's registration is
not cool but I mean I I thought they
"have, 15500 stars on uh GitHub"
let's take a look I thought this was
"1,700 actually I thought this was okay"
to install but you be the judge of it I
then all you have to do is click on run
anyway so let me show you again when you
get this click on more info and click on
run anyway after that it's going to
install it then you can just launch it
okay and once it launches let's actually
delete that graph then it's going to
start like this empty you can create new
graphs here you can create notes Here
either by searching or anything and then
by clicking on setting you can adjust it
settings you can connect noes by click
dragging these things it's pretty
awesome just take a look it's it's
pretty smooth I mean I really like it it
gives you your token usage and costs and
everything I think this is pretty new
and probably they'll improve it yeah let
me know what you
think like I said the graph file will be
available for free as a public post on
my patreon link will be in the
description and the on codes will be
available in a pay tier just remember
that this time I tried to comment the
code heavily and I also have a readme
file uh some of my viewers suggested
that and I'll try to do this for future
projects too as we as we see the
requirements for this is pretty light
just open Ai and P game p game to be
able to run obviously to defense games
right because it's built with P game we
set our open API key and then here we
are defining our general parameters
model you can set it here n is going to
be the N parameter which you can
actually pass in through the chat
completions which allows you to generate
multiple responses from a single message
or prompt make so consider to 2000 we
have this read file which is going to
actually read Tower defense. CSV this is
a class and the next one is the chat
class okay where we Define the model and
and a system message right here
and then we have a get response method
here which is going to make the call
right with the system message and the
user message here we set the n and the
mix tokens and we create a responses
list because this response is going to
return multiple responses is a list so
we check for forn in response choices so
this is a this is a bit weird Okay so
the list so the each one of the
responses is going to be under choices
so that's why you have to Loop over that
and then we are appending to the
responses list the message and content
from the from that end now we return
that and this we have a class to append
to the data set so this is just going to
right append it to the CSV file just
like the graph did so we can create the
Tower Defense CSV and then we have a
main function main function which where
we specify the input file path which is
Tower Defense outline text right this is
the general outline of the game which
was generated by the communicating swarm
intelligence I'll put the link to that
video in the description as well I also
added that as a tool to Auto AGI I'll
put a link to Auto AGI as well which is
a great uh agent you can use anyway uh
so we Define the output data set path is
Tower Defense CSV we set the file reader
and the chat data set appender and then
we read the file and here's our user
message we're defining right and now and
we get a chat response and we append the
message and then we do that that's it so
if you were to run this we're going to
get the exact same result let's actually
quickly do that make sure it's working
let's start let's run this code okay we
are done and here is our CSV file all
with the code and everything remember
the second one is just going to run over
it and save it to python files but
unfortunately only some of them May it
through that's fine through our checks
and the third one is just going to run
and test the code right so you can I'm
not going to go over this very much it
just uses subprocess to and it has a lot
of checks to make sure everything runs
properly it just runs the code and it
has a timeout set to five you can set it
to anything else so it just runs that
code for 5 seconds unless there's an
error right and if we approve it then it
saves it to working code if not it
deletes it if there's an error it
deletes it okay feel free to change this
maybe this this can be removed if yeah
anyway here we go we run this just to
see this didn't work right no and we can
keep running so this one kind of works
but doesn't allow us to add so I'm just
I'm not going to do this again but this
is how it works yeah like I said the
files will be available at patreon links
will be in the description thank you for
watching and I just like to talk about
about eoh AI Academy I've been learning
and recording videos about all my
projects learning about how to build GPT
powered apps and you can there's it can
be overwhelming to find the right
content you're looking for I have quite
a lot of videos right so ww. e.li serves
as a place where you can search for
example we did talk about swarm
intelligence you can search all my
videos related to swarms this is the one
I was talking about throughout the video
and you can actually read their
descriptions watch them here if you like
or on YouTube and you can find the code
download links which will take you to
the post which will allow you to
download the codes code files for the
project uh at my patreon this is it and
see you in the next video