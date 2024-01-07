hello and welcome back to yet another
rivet tutorial um today we will find out
how we can use local um llms using LM
Studio I mean there also other other
Solutions out there but this is pretty
simple one and easy to understand one
and not just how to replace uh to make
the shed note only use this local model
instead of the open model but also look
at Solutions where you can actually mix
and match because maybe maybe there are
some operations where you see okay I
need CH GPT 4 because it's very complex
and um some smaller local model is not
giving me good results but maybe you
also have operations in your graphs
where you're like okay sure um just need
a summary of this text and if I use mrra
7B instruct for example then this works
super fine so why pay the money so um
let me show you both um but I would
really uh suggest to use the second
solution okay first thing you need to do
is download ATM Studio I put a link to
the in the description it's fairly
simple it's just some application you're
installing on your PC so nothing you
need to know about or worry about um
after that you basically have to yeah on
the home screen here you have to pick a
model so I mean this is a full different
topic you can yeah get descriptions here
can also find out lots of websites where
descriptions are what the models can do
Which models are good so for example for
this one here I downloaded the the
smaller quantum ized version of mrst 7B
so quantized means it's a bit less
accurate and smaller but that also makes
it quicker um but basically it really
also depends on how much uh system
memory you have for example here as you
can see you need 8 gab plus RAM and
there also votes where you need more so
just just choose something you probably
have to test it out
yourself after that U maybe go to the
shat first and
um yeah maybe load the model to see that
it's actually working so you just press
select the model to load and now let's
put that in and yep I know what I'm
[Music]
doing so this may take a bit depending
on your yeah Power of your machine so
now we have it here and now we can just
try out if it's
working as you can see here this is now
um mystal instruct to 7 b or 02 7B
running on my uh MacBook Pro and it
works so let's stop this but the
interesting part or what we need to to
touch now is this panel here which is
the local inference
server and there's one check mark which
is usually off that's this one here
please put this to on that um makes it
much easier to use it out of rivet and
we are on your you're on your local
system anyways not in the internet so
you do not need to worry about some
cross origin resource sharing and some
security because it's just running on
your PC so just put this on tle this to
on and then start the server and you can
still see there's still the yeah if you
didn't do it before then you need to Lo
the model first
here so let's do this and we can
immediately see that it created some end
points here and the most important one
is the shed completions endpoint here
so let's copy this because this is the
same structure that open my I using
version one then chat and completions
exactly the same path but there's your
local uh host at the beginning which
points to your
PC so let's copy that and let's go to
rivit so rivit the standard way to do
this would be to go to the settings and
go to op
mayi and now we would be replacing this
open mayi end point and actually there
was also a button ended here which is
just configure for LM
Studio we can also press this
but this is somehow faulty this is not
the URL we need to use I copied it from
before so let me insert what I copied
and we can immediately see this URL is
missing is lacking the version one
probably LM Studio changed this at some
point so they added this to make it
compl completely like open AI but rivet
is not reflecting it so it's actually
not working if you click that button so
instead we copy this into the open end
point and basically that's it so
now if we use a shat
note and we do some prompting so maybe
you are a
profession gamer you only talk about
games it's our system prompt just to do
something and we will do some text and
we just ask him do you like hiking in h
hiking put this to the prompt we can
send this off and I mean it still says
the model is GPT 35 tobo but this is
just being
ignored then we can
see um that this is being answered and
let's quickly go back to to uh LM
studio and then we can also see in the
locks here that there was actually a
request made here this is our request
and we can see that the system prompt
was your professional gamer and the user
prompt was this so we are now talking
our local model and no more with uh
with okay so this is the simplest way to
do it the issue with it is now when you
create a shed node I mean this is all
being ignored what you chose here you
cannot communicate with oldi anymore and
as I state in the beginning maybe maybe
you need to maybe you need both so let's
not do it like this let's go back to the
settings let's just remove
this so and what that means is when we
now run it we are going back to open
AI but we have another
solution so let's create a second chat
note
and let's just for the better
readability collect local model here
it's not necessary it does not do
anything um but in advanced there is
also an endpoint setting
here and now we can either add an input
for it or directly add our value
here so this depends a bit on how you
like it but maybe let's just add it
directly now we can also see here that
this one is using our local and this one
is uh using open Ai and now let's
connect both
up and we can even send the same prompts
now at the same time to both systems so
now this is our open answer I appreciate
the beauty of nature but my true passion
lies in the virtual wordss of gaming and
this is our mistal 7B instruct answer
I'm sorry I don't have personal
experience or interest outside of the
gaming
world
um so in my eyes this second solution is
uh is the better way because you yeah
you're stay more stay more
flexible if you're more interested more
in this I mean there is also the
possibility to use orama then you can
even use multiple models on your local
machine so if You' like to see something
about that um yeah just give me feedback
and in general maybe like or subscribe
the channel or um yeah if there's
anything you want to see or you dislike
or you think should be improved upon J
feel free to tell me in the comments
thank you very much and
bye