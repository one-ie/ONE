so I have not written even one line of
code yet this is really all it takes I
just have four notes I say run pass the
URL and ask a question what is the most
important item on the agenda in this
meeting and we already get our answer
the most important item on the agenda is
proposal number four and we have a bit
more information about it earlier this
year Ironclad open sourced their
graphical development environment for AI
applications rivet it is a great
environment to prototype AI applications
without any code especially if you're
building complex apps with multiple
Services combined it is great to have
this visual aspect you can also
integrate the graphs you build in Rivet
directly into your projects applications
or products let's see how you can build
a graph in Rivet using some of their
plugins not surprisingly the first thing
that you have to do is to install rivet
on your laptop once you've done that
you're going to have a environment like
this um the text might be too small to
see right now but I'll make sure to go
uh slow to make sure you can uh follow
along because I cannot make the text
bigger at least in the interface so at
first you're going to see the project
name description and other things um I
named this project Q&A with assembly AI
because I'm going to build a project
where we can uh give the application a
URL to an audio file and then we're
going to be able to ask a question about
this audio file and get an answer as a a
text format um once you've done that
you want to make sure that you add the
assembly AI plug-in so there are a bunch
of plugins here assembly AI is one of
the um first ones that we can see here
all you have to do is say add and once
that's installed you need one more step
which is to get a assembly AI API key so
for that if you haven't done so you can
go to assembly ai.com and create an
account if you already have an account
you can log into your dashboard and then
you can copy your token here
and then we're going to go to the canvas
again go to
settings plugins and paste our assembly
API key let's take a look at the
structure before we get started so um
this is a project and a project consists
of multiple graphs so right now we only
have one graph called an Untitled graph
but we're going to build something
slightly bigger in a second all right
let's start with a simple example so if
you want to add an audio file for
example you can say data audio file or
maybe I'll make it a bit bigger here and
then I can add a assembly AI
node transcribe
audio and all I need to do is to connect
the audio data to the audio input of
assembly AI so to pass an audio file you
can just pick a file here um for example
the Gettysburg Address I think a very
short version of it and when a node is
running you're going to see this orange
glow around the node and then we have
the transcript object returned so what
you get is the whole transcript object
so the whole response that is returned
you have the transcript ID and the
transcript text here this is a very
short file I think is around uh 5 10
seconds so that's why we get a very
trans short transcript text so let's see
how to build a full-blown project around
this so I'll just delete
these um I'm going to have three graphs
so if I delete this graph I can right
click and create a new graph so the
first one will be
transcribe
audio the second one will be answer
questions and then I'm going to have a
main graph I can just call this Q&A on
audio for example
so let's do transcribe audio first so
these are all separate graphs and in
each of these graphs you can take of it
as kind of like a function we're going
to do only one thing so in the
transcribe audio part I'm going to add a
graph input through input and output so
graph input means uh instead of going
and uploading the audio directly I can
get this input from outside of this
graph into this
graph
uh maybe rename this as audio
input and then this will be a audio URL
and it will be a string again I'm adding
a assembly AI transcribe
audio uh you can either pass audio files
or audio URLs to assembly AI so I'm
going to pass this um the name is fine
so I don't need to change that this is
going to be audio
transcription let's see see yes I can
move them like this and this time we
only need the transcript ID so what I'm
going to do maybe if I zoom in so you
can see it better I'm going to add a
graph output from input and output graph
output I'm going to get the transcript
ID from this assembly AI node and then
output that then I can call
this transcript
ID I also call it transcript ID here so
the only job of this graph is going to
be taking a audio URL and outputting the
transcript
ID so let's set up the answer question
section again I need an input for this
graph and the first one is going to be
transcript ID input and what we're going
to get like we specified in the other
graph is going to be transcript ID and
then another
input and this input is going to be a
question so it will be
question input I will just simply call
this a question again it's going to be a
string next I'm going to add a lemur Q&A
node the transcript ID is going to go
into the transcript ID and the question
is going going to go into the question
question if you want you can even
provide extra context for this question
uh when you're setting it up but we only
want to collect um two inputs from the
user this time the question and the
audio URL so as a response we're going
to get the Json object like we've seen
before um but I want to show you what
the Json object looks like before we
parse into it so I'm just going to
create a graph output and we're going to
Output the response directly um I'll
just call this the
Jason
response all right so now we have two
separate graphs so like I said we can
think of them as two separate functions
we're going to call them together in our
main
function so we're going to need two user
inputs the first user input is going to
be the
audl we're going say please provide a
URL linking
to to an audio
file second
input from the
user is going to be a
question and we're going to say what do
you want to
know about this
audio so when we run this graph this
main graph uh the user is going to be
prompted to answer these
questions next I'm going to
add a subgraph note so you go to Advan
and then
subgraph inside the settings you're
going to select which graph you want so
first we want to transcribe audio graph
if you want you can specify an audio URL
also in here I think that's going to be
the default value and then I'm going to
get the answer from the audio URL user
input into my transcribe audio subgraph
and then it's time to create another
subgraph again add Advanced subgraph and
this time I'm going to call the answer
question
subgraph like I said again you can
specify a default value for these two
inputs but we're going to get the
transcript ID from the other sub graph
and the question from the user input for
the question and this way we should be
able to get the Json response to this
question so let's see what happens when
I run
it so first it's asking me for a audio
file to a URL to an audio file I have a
URL to a news report uh that is around
20 minutes long and my question will be
what is the two most
important items in this news
report all right let's submit it and now
at first the transcription is
running oh and then we get an error so
one thing um that you might want to do
when you get unexpected errors is to
change your executor so by default it's
going to be the browser executor but
there is another option which is the
node.js executor some of the
functionalities for the plugins might
not work for the browser executor uh for
safety reasons so let's change it to
node and then see that everything works
well I'm going to submit the same inputs
now the subgraph for answering questions
is
running and we got a response so let's
see what the response looks like we have
a Json object or a dictionary if you
want to call it that way uh of an answer
and a question so we know what our
question is and let's make it bigger we
also know what our answer is the answer
is based on the transcript the two most
important items on the news report
appear to be and then it gives us uh a
list of what the two most important news
items is so to fix that to fix what that
looks like what we can do I'll just
remove this graph input so to extract
the answer from the response that we get
we can use another node I think it was
here yes objects extra extract object
path um I'm going to send the response
in
here say extract
answer and then um let's see what our
response look like
first so we have if you have if you ask
multiple questions we're going to get
multiple responses but we want to ask
one question so far so as we see it's
going to be a list and then inside
there's going to be a answer key so
let's parse it accordingly we're going
to get the first element and inside
we're going to want to get the answer
from
it and then I will add a graph
output and connect the match into the
graph
output call this output the answer and
it's going to be the
answer all right let's come back to Q&A
on audio and yeah now we see that the
output is going to be the answer so
let's run this
again same audio file same
question all right let's look at the
answer now we have it a little bit um
better formatted also so based on the
transcript the two most important items
in the news appear to be the Heatwave
impacting large parts of the United
States the arrest made in the Gilgo
Beach murd case on Long Island okay that
sounds serious and that's how simple it
is to get answers to your questions
based on an audio file uh with rivet
using assembly AI plug-in if you want
you can also use these graphs that you
made directly in a nodejs project uh I
will not go into the details of that in
this video to save time you can take a
look at this amazing tutorial made by
one of my colleagues Neils uh where he
goes through basically the same thing
that we went through on this video and
then also explains how to uh integrate
these graphs in a njs project and you
will also have access to the code if you
go and take a look at the blog post I
will make sure to leave a link in the
description below it's getting easier
and easier to set up these AI
applications but one of the key things
that you need to learn is how to prompt
these models to get the response that
you want if you want to get better at
prompt engineering you can go take a
look at this course made by Patrick on
our Channel