hello and welcome back to yet another
rivet tutorial um today we are covering
a very important topic of function
calling um yeah function calling
basically means that you are giving
tools or functions to uh an llm or
actually usually to Chet GPT I will
explain why specifically shet GPT in a
second um so that you can enhance it
with functions that it usually doesn't
have let's do a super super quick and
simple example we will just run the
graph and yeah we will just ask CH the
GP what is the current date let's see
what it comes up with um oh the 1st
October
2021 uh close one close
one and
basically if we give it functions for
example the function to to get the
date we can get our answer back here we
can see the current date is January the
4th
2024 and yeah of course there is much
much much more use cases for this maybe
you want to give it functions like gbt
for has like you that it's allowed to
open websites on its own or trigger a
web search or you could connect like um
Dolly to it or something or some other
image generation service and give it a
function for that basically yeah this
means you are enhancing the capabilities
by a lot please note function calling is
not always the most reliable thing
because basically you are saying telling
jet gbt okay here are like here's one
function or here's maybe a list of 10
functions and you decide what you do
it's your job to decide that and that
can work and especially with J GPT 4 it
works mostly okay but it can also not
work it can use them wrongly it can not
use them it can use the the wrong
function at the wrong time so if you
want to be safe and have a most stable
system try to solve everything with
semantic routing first that is a video I
just did before just check out my other
video because there you have the control
and there you can see if there was a
certain user query that led to a wrong
Behavior you can just add it to the list
um for a certain route in the future
that you make sure that this will not
happen
anymore but yeah if you have a pretty
complex setup where you need the AI to
make certain decisions because there is
so much that could happen or could be
asked of the AI then function calling is
for sure the way to
go okay um sorry for the very long
introduction but I think it was
necessary um so let's take a look
basically uh for function calling to
work first of all we need some function
and I created some graph for you here so
which helps us generate some functions
also using GPT 4 because we need some uh
we need um certain informations and
certain Json objects for this to be able
to create them so let's just do this and
let's say um I want a function to open
the window of my car I mean of course if
we doesn't matter now I'm just doing a
random example and now I have built a
system prompt here which instruct that
that it creates a function for us in the
proper format or it can also create
multiple functions and let's see it's
still working okay and now we are
extracting um yeah we are getting the
response we're extracting the Json we
are extracting the function um object
out of it and then we are getting the
name so it us created a function
suggests to create a function called
open car window um here's the
description of the function for the llm
opens the specified window of the car
and then it created a function and it
actually uh yeah let's make this bigger
it suggests to create a function with
where the there are two parameters there
is a window which can be a string which
is defining what window to open driver
passenger rear left rear right and then
there's a percentage of how much to open
the window from 0 to 100 and basically
this is yeah the description how the
function works so if we want to create
this as a use this as a function we
create the GPT function Noe and now we
need to input those informations I mean
of course we can also manually input
this but this here is a useful helper I
think to get you started with how
everything needs to be and then you can
adjust the function as you see fit and
then we would now copy the whole
parameters in
here oops marked more than I wanted it
um yeah and now we would have um our
function which has a name a description
so that that the llm knows when to use
it which has fields which expected data
types also descriptions to help the um T
gpg to use it and so on it also tells us
what the required fields are so both
window and percentage must be set for
the function to work which makes
sense okay now we could uh use this in
the graph I will show you now to um yeah
to do this so let's actually do that
let's copy this one uh let's delete it
here let's actually put it in
just for the fun of it so now we can
do uh open the drivers window
halfway let's see what it
does and now we can see that it is
actually calling our function instead of
responding with the text it's giving us
it's doing a function call which we are
getting um of the function call output
from the chat note and you can see it
filled the arguments window to driver
the percentage to 50% this looks great
it now knows how to change to to uh yeah
how to um open the window I mean of
course we don't have the function
connected here I don't have my car
connected to rivet but theoretically you
see what is everything is possible
everything you can now create in Rivet
to actually do something will work and
note there's one more important thing
here there is this call this ID here and
we need to have this value when we later
want to um feedback the result of the
function called to shed GPT to inform it
that it happened successfully or maybe
your have functions which I mean maybe
there could be like uh also this
function could for an error like
driver's window is stuck or whatever uh
then you will need this ID but we will
see this in practice okay let's remove
this
again and let's stick with the two
functions we have um I have two very
simple functions here the first is the
current daytime which we already saw um
and the second one is triggering a toast
event which is just a small alert box
which we can see in Rivet and this one
is very simp so sorry first let's check
this one here current daytime does not
have any properties because we don't
need any input we just it always returns
the date time of today so no inputs and
the other one here to the for the toast
event we want the message to be shown in
there uh in a in an field called message
so that is what we are informing shed
gbt about
here okay and then first of all it's
super simple we are connecting our GPT
functions into an array and this array
goes to the functions port and this port
can be activated
here and we could also even Force sh GPT
to use a certain function so let's
assume we had the semantic routing
active we could also just um force it to
use a function Now by so by selecting it
here because we can do function and then
we can uh pick the name in here but
let's uh keep it on
auto okay and let's actually run the
time example
again
uh what is what date is it today um
sorry so we're doing this and
now um it's answer it's using the
current day function as we can see
um to proceed with this uh we are now
destructuring the function call object
and we are basically um getting three
values the name the argument and the ID
and then we are automatically getting
fre output ports here and as you can see
arguments are empty so it's just an
empty object but we have the ID and the
name and now we need to decide uh which
function it is and where to handle it
and this is very simply done by creating
a match node we are putting the name
into the test node so that is what is
being checked so basically if it matches
current datetime or trigger toast event
and we can of course add new functions
in the future or change them here and
then
if and then we are also adding the value
to be passed in this case the
arguments so so what this does now it is
um in this case we um hit the current
date time match so this output Port is
being used and the value that's being
sent through it is our empty arguments
in this case and then now this goes to
the subgraph here for the current data
let's take a look this is a super simple
subgraph we do not need to use the
arguments so we are just using them to
start the subgraph and then there's a
simple code note in here which is just
returning the current um date time and
we're outputting it
again and now for the last step we are
feeding this back to uh shet GPT so we
are creating a prompt with a type
function this is
important and sorry this is wrong and
for the um name or the as also written
near the tool call ID we activated the
the input
port and this is where our ID here our
call ID is going this is important um
since
uh since um OPI introduced the
assistance even if you're using the
normal shed they are now expecting a new
form it where they want to know always
be informed what um yeah what is the ID
of the function that was called what are
you giving the results for otherwise it
will complain the API will complain and
not work so we are putting that in and
we of course putting in our results so
in this case just this string with the
date and time and now we're assembling a
prompt which is just the all messages
output from the previous chat and our
new prompt for the
function so basically we can now see
that uh we are we got the function call
and we are answering the function call
with the same matching ID and now we are
putting this back to the chat note and
CH GPT can properly answer today's date
is January 4
2024 of course usually you might want to
do this in a in a loop uh or maybe in
not in a probably not in a sequential
order but for Simplicity of this
tutorial I kept it like
this okay and let's look at at the other
example with a toast message
um saying subscribe to my YouTube
channel um let's just do
that and I'll wait a second why do we
don't see that let's check it it's seems
to have maybe made a mistake subscribe
to I mean for for now this looks good
it's triggering toast events subscribe
to my YouTube channel why did we not see
that and then we are again um extracting
the information we are now going to the
match node and we are matching trigger
toast event and we're going to the
subgraph
and
huh uh there is some data issue here I
need to fix as it seems this is a bit
odd but I think I have an idea where
this is uh where this is coming from let
me try
something the D structure note I also
created a kup um um issue for this is
not really keeping the DAT the the data
form it sometimes so I think this will
be the issue let's just try to re run it
yeah okay this is also not working wait
let's make this a string let's
try yeah now it's working subscrib to my
YouTube channel so there is a bit of
bugginess with the D structure note I'm
I used so I will actually do it fix it
differently quickly and just show
you because somehow this is not uh when
it's outputting the data sometimes it's
Mal forming it in some way so this is
not a proper working object anymore so
now instead of getting the arguments
from here we are going to use an extract
object path
note and we are going to put it here
from the function call
and we are using this as our value
no uh what did I do now no this is okay
this is our value
oops I'm sorry I'm messing it
up and let's go one more time in here
and this needs to be an object
again and I think now it will be working
again yeah now it's working again so I'm
not
sure I I prefer using the D structure
node be um instead of using the object
path node because you can do lots of
destructuring on one note but yeah there
is some bugginess with it so you cannot
use it for all cases so often you have
to fall back to the extract object path
node as you saw here or you have
to uh somehow um correct or find a way
to repair the data form it which is a
bit of a
pain yeah but basically okay that is it
um I also explained here how to do your
create your own functions and add them
um I mean I also showed it to you
basically but there's also the
explanation here as always you will find
the project file in uh the links below
and yeah please like subscribe and tell
me if you want to see more if you want
to go more into depth see more complex
examples or some specific examples uh um
yeah just let me know see you and have a
good day