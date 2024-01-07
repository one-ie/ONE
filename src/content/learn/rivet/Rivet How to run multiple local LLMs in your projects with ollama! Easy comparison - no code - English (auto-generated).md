hello and welcome back to my channel uh
today we are looking at uh ways to run
local models again um using AMA which
has several Pros so first of all it
really I'm I'm not sure if this is if
this is proven tested but to me it feels
at least if you're running it with AMA
and not with local U with LM studio um I
it it's just quicker it just seems to be
more efficient in running models but
that is not the main thing the the main
catch of Lama is that it can kind of hot
swap models so basically what that means
is you can have like three four or 10
models
installed and it can really quickly load
other models in studio you always have
to go into the UI and swap the model
manually also if you use it in Rivet and
so you cannot do requests to 10
different models uh in succession but
with uh with AMA you can so it's pretty
cool you can just you can run have a
rivet graph which has uses like five
different local models and different
part and it will all automatically be
handled and uh it will always only load
uh load the model that you need so that
is a pretty unique and cool thing and
yeah let's just jump straight to it so
first of all uh there's not much about
installing AMA you just go to the AMA
website ol. a and you can download it I
mean sadly there is no windows version
yet but they are saying it's coming
soon and once you installed it you will
just see that all Lama lifts up
here and that's all you need to care
about if you're using rivet usually you
would now need to go to the terminal and
write some commands and it's not super
complicated but um the good thing is
it's
unnecessary uh the way we will do it
now um yeah let me also show you one
other page first I have a library and
here you can see all the model that ama
supports out of the box and basically
they have a really really good list of
all the interesting and trending models
that you will typically need and yeah we
will see um it's super easy to install
all of them and use them so basically
you can pick anything that is in this
list and you just need to to copy the
names out here and then you are ready to
go okay let's go straight to
rivet sorry my
okay most important thing here is first
you need to go to
plugins and there is the AMA plugin here
just press the add button and then it
should automatically install it please
note that only adds it to your current
project so if you want it in another
project or a new one you need to do this
again and then if you go to the project
settings here you should be able to see
it here rivit plugin
AMA that's how we see that it's
working
and um ah sorry I need to go to the
canvas then if you go to add here you
should also have now the AMA
submenu
okay
generally um it's pretty easy to
use but there are some issues so let me
first just show you what the issues are
we are now trying to uh have some
instructions like your professional
writer and write something about the
topic the user writes asks you about
answer in 50 words maximum and let's say
we want to talk about C and now we want
to use dolphin 2.2 Mistral which I have
installed I I will show how to install
everything after this immediately but
let's first um just see what happens if
we run
this then we can see that yeah we're
getting an empty output it's not
working and this has to do with the
format here
because yeah this model does not need
llama to instruct and it also doesn't
work with raw you don't really need to
know uh we don't really need to go into
details what this means but there I I I
found a way to to fix this and make it
work for every model but basically
underlying every llm is somehow trained
on getting those instructions in a
specific format and as you can see here
if we have chosen the Llama 2 template
then our text your professional writer
and so on is now being embedded in those
uh tokens here and then there's here is
the what the user wrote and then there
end of
instructions and this can differ from
model to model
andama usually takes care of this but
somehow the the rivet plugin is forcing
us to make a selection and not use what
AMA provides to us but as I said uh I
have a fix for that I have a gra created
graph that will automatically handle all
of that for us
so yeah let's get started first of
all you would go into this graph here
get new model because you need to
install a model as I said you don't need
to go to the terminal or do anything
it's uh super simple using this rivet
and now um basically we are you have to
go to the library I showed you before
with a list of models and just pick a
name for example Ora 2 and then you
press run here here and then AMA will
automatically install this model for you
this this will of course take some time
depending on your internet connection
because I mean they are there can be
lots of gigabytes thick or maybe even 10
plus gigabyte depending on what you
chose so uh you have to be a bit
patient so this will run a long time
just let it keep running and at some
point it will finish you will also get a
toast message and Riv it um when it's
done then you can go here and run this
graph and now now you can see uh what
are your installed models and now let's
say you installed Ora 2 then Ora 2
should now be in the list as you can see
I have three different models doin 2.2
mistol Ora 2 and F installed at the
moment and basically then all the
preparation is done and we can go to our
main
graph and there are also some uh
instructions here you can read uh but
let me quickly tell you so basically we
have the same thing again we have our
system prompt or instructions for the
llm here you can of course put anything
in there you like and we also have the
user
prompt so talk about Tesla cars please
also note I'm not using the prompt node
here because that adds some more syntax
and stuff that not every model might be
trained on so let's just keep it as
better keep it as text it will
automatically be added um they will
automatically be added a username or
whatever how the model needs it to
be and now basically you can yeah um
connect as many models as you want to
run this into to this array here so if
you only want one I mean there's no
issue you can just disconnect everything
and just just use Ora to or uh that also
works and this now runs into a subgraph
which handles all those issues let's
first run it and let's see I mean this
will not take a while of course because
uh it's needs to load fre pretty big
llms I mean they also gigabytes big and
they need to be
processed and let's wait a second for
the
result and then we will uh take a short
look what this is actually doing here
but the idea is basically that you can
just use my subgraph to put um
everything in and then it will work out
of the box and everything is being taken
care of
[Music]
okay I hope it will finish
soon so let's actually take a short look
what's being the issue ah it's F yeah
yeah f is a bit of a problem candidate
because it did not it does not care that
we wrote we only want 50 words it gives
us a wall of text so this wall of text
just took very long but basically
look at here uh we now have our um we
now have our responses we have one
response by dolphin 2.2
mistro where uh we have a short text
about Tesla cars we have one from Ora 2
and we have one gigantic text from fi
that's also why it was running so long
because fi is a model that's trained on
logical reasoning and actually it's not
yeah it does not like those kind of
tasks um
it's also it's even trying to uh build
some case here about uh a car which is
not white or silver and so on so it's a
reasoning model it doesn't make
sense but as you see now all everything
is is working perfectly we are getting
proper responses as we expect them and
we can use them so let's take a look
what we are doing
here
um yeah um mainly what we are doing and
you don't need to understand in detail I
just want to give you a short idea is um
as I said AMA is actually handling uh
those usually handling those proper
prompt formats for us and that means
that we can just for every single
model let's maybe go to the first one to
Dolph and 2 to mistro we can just use
the API which we're doing here to get
the template and as you can see for
example this is the
template that um that that dolphin uh 22
is expecting it wants some IM start
strings and system and then now here the
instructions go in and here the prompt
goes in and we are pulling that we are
getting that from theama API and then we
are actually building the prompt as it
should be here and now let's look at
another example this is Ora 2 now this
actually looks the same but f is
different I think yeah um fi is very
different again you see here they want a
completely different syntax um and but
this is also taken care of so that is
mainly what this graph is doing it's and
then we are running this um into the AMA
shed and we are saying that the format
is raw because we built the correct
format
ourselves yeah mainly that's it um I
created two more inputs but they're
optional just to show you here one is
the context window size so for example
if we wanted F now to really Force to
give us a short
answer um we can just maybe put this to
100 and shoot it in because now it only
has 100 tokens and then it will be
stopped so now we should not have to
wait this long and we should not get a
wall of text um that's one way to handle
a models which
are yeah not behaving as they
should let's take a look it's still
taking pretty
long um
okay but now it was quicker yeah now we
can see that even fi gave us a pro a
reasonable answer you see here so this
is actually an an a way to get the
models to behave uh which is not so
usual thing to do with shed GPT but with
those local models it makes sense to do
this as you can see here as well and
then I also um added the temperature
because it's a useful
parameter um so this is the same as for
CH gbt if you want to have it creative
if you can add a one or something in the
F value is 0.88 or if you want it to
completely stick to to this uh prompts
and to the stuff it should do and it
should have no creativity then just send
a zero in here and it will behave and if
you need more settings um you can of
adjust this here and either change it
directly in here or activate the the
inputs for other settings as well like
top p is Maybe something that people are
using and you could just create a graph
input as well and move it
there yeah but basically that's uh
that's it uh this way you can run any
you can run lots of different local
models which is super helpful also just
for testing I mean it's hard to tell
what model is good for which case now
you can just uh send everything in
parallel or at least sequentially in all
those into all those models and and um
yeah it's pretty easy to to test them
out see which model is strong at at what
of your tasks and uh yeah what you
should use or not use
and yeah that's it so have fun with that
I will share this graph of course
um I will actually remove this negative
example because it's not helpful um but
basically um yeah you can just use my
subgraph here this is the main important
thing you should may maybe want to
import in your project and just one note
about it if you want to send an array of
models in here so more than one model at
the same time you need to have this
split activated when you call the
subgraph so that uh it will be run for
each model otherwise it will not work or
you can only send in a single
model okay but that's all for me I hope
this helps and as always please like
subscribe uh and leave me some comments
see
you