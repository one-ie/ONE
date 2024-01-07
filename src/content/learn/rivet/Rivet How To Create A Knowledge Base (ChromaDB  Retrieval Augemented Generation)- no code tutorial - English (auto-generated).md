hello and welcome to yet another rivet
tutorial today we will dive deeper into
the rack topic so retrieval augmented
generation uh last time we did a
introductionary video where we showed
the um internal data storage of rivet
but this is yeah let's be honest this is
nice for prototyping but this is not to
be used if yeah if if you want to either
put it production summer or you actually
want to have a huge database it's very
slow it's file based and even with yeah
if you just add uh some hundred um
embeddings in there it's already getting
an issue and there's also missing
features which other Solutions have and
the solution we are going to looked
today is chroma which is open source uh
and very powerful and yeah you can just
run it on your PC or in the cloud uh
it's free and so let's get going uh to
the easiest way I mean there's lots of
ways to install chroma sadly there's no
yeah there's no application you can just
download and start um but the simplest
thing actually I found is to use
Docker so first please download the
docker application um you can see here
it's available for systems and it's just
an installer so there is nothing to
worry about Docker is um a tool that
allows you to run code or applications
in separate containers which is good for
security and also makes it much easier
iier to handle them as we will
see yeah once you downloaded that and
you started up Docker um you should have
the application running uh but not
really see anything in it
yet now there is exactly one step we
will need to take now which is uh going
to require us uh to to to write yeah at
least a small command and for Mac us
users this will be in the terminal so
you go just to applications and open
Terminal and for Windows users this will
be the command line CMD I think you can
just press start and search for CMD and
you will find it and here we are and
now uh let me quickly check I also don't
have it open now uh yeah we need to
write down Docker pole chroma DB
chroma and then we press
enter and now in my case you can see it
didn't really happen anything because I
already did that but in your case you
will see that there will be some
downloading happening and what's
happening it's downloading a blocker
container which is capable of running
chroma so we don't need to do anything
no python code no no nothing and that is
also the only thing we've been doing in
the in the terminal now we will never
look at it again now we can go to Docker
and first we go to images and in here
you should now see chroma DB chroma this
is our container we or our image sorry
not container our image we just
downloaded and also there's one single
step we need to take now for the when we
run it for the first time we press run
we go to the optional settings and now
once you need to enter the host Port
"here which is 8,000 if you don't want to"
change it and it's good to keep it at
this as this is what rivet is expecting
and then you press run I will not do
that now because uh it then creates a
container and I already have data in
there but this is basically what you do
and then you can actually stop it and in
the future you will always be able to
run it from here it automatically
creates a container with some random
name as we can see in my case it called
the inspiring Hoover and there we can
see that the image is the chroma image
and yeah I already have it running let
me stop it but
basically uh the one single thing you
need to do in the future to have your
chroma database and all your data
available um is press this run button
here and then actually see yeah we can
even use this short link here you can
check if it's
running by opening this and then
adding SL API V1 and when if you can see
a nanc heartbeat here then chroma is up
and running and yeah you're ready to go
I also have all those links uh to to
donad for this local host and everything
in the uh in the rivet file we will look
at it in a second but basically now
chroma is
ready and then there's one more thing
for this example I mean I need some data
we will be looking at so um there's this
nice website keggle which lists lots of
data that can be used for projects um
and I found some British Airways reviews
in Json format which is very easy to
handle in Rivet so as you can see it's
5.1 uh megabyte of data I um I think
"it's like 4,000 reviews or something"
around those lines um and yeah we have
some information about it and text from
users so basically I just download this
and extracted it and then yeah then we
can go to
rivet so first of all as I said there is
instructions and yeah they are a bit
more extensive but basically the first
two steps are only to be done once we
already did all this year so we made and
not ready so there's one more small
thing we still need to add the chroma
plugin so if you um I already did this
but you need to go to plugins and then
add it here for this project you want to
use it and then it will be there that's
all you need to do in
Rivet and then yeah there's the second
thing we will need to add some data as I
said before I um used this British airb
data and so I um we will just do this
now I mean I already have it imported so
we will not run it fully but I will show
you a small bit of it at least CU
basically we have this um read data here
I just see I named those a bit
um a bit stupid this is fetch data from
chroma DB and this is reading data to to
insert it
um so we are starting here in this scrap
and here we have a read file um Noe and
in this one we need to select our data
file and so in this case it's this
British airb review file and then as
this is returning a string we need to
use extract Json to to turn into an
object
again and as I said I will not run it
now because it's lot of data and it will
be very slow um but what we are doing
then is we have an array of those um
objects and we will put it to a subgraph
and as always we have the split uh
enabled and then it's very important to
also also set this limit this max amount
the standard is 10 up to a high number
because otherwise your import will just
stop and if you want to um yeah maybe if
you don't have a very powerful machine
maybe you want to activate sequential
then it will take longer but maybe it's
working better for you so then it will
only handle each data set after
separately after each one it also
doesn't run too long that I think it
took me like 10 minutes with sequential
or something like
that okay and then we are going into a
process data
um graph and this looks more much more
complicated than this and also here I
will actually run this graph because I
want to show you what it's doing and
this is also a good um point to to show
you another important or nice feature we
have a graph input here input here this
is just our now our review our review
object each one I mean we activated the
split so it's just always going to be
one um but here we can also add a
default value so I have this check mark
on and now I have one I put one example
in here and that means that for testing
purposes or for creating this graph I
can just run this graph here I don't
need to start at the um yeah at the
first graph I can just start
here um and still check if everything is
working fine so that's also what we
doing now so we are working with this
data set now so we can see there is a
yeah we let's make it bigger we have
some information someone wrote less than
a premium experience and can see when it
was written and like the trip was very F
at the full text and lots of different
information that the guy was in the
business class nknown to kic and so
on and now we are going to extract two
different types of
data first we need our embedding data so
that is the data we want to do a
semantic search on and then this this
case I chose this to be the the headline
so basically the the subject what what
what the user wrote like less than a
premium experience and the whole text
and I added here a markdown so that the
AI can later see that this is the
headline and yeah but it's not
necessary and this is basically what we
are going to use as um Save stores data
and store embeddings for that can be
searched upon and then we are creating
lots of metadata so as we can see here
our goal is that we create um I mean I
did not use all the fields I randomly
selected done so I thought it might be
interesting to know that um the the trip
was verified so we only get valid
reviews um that we have the year
separately um before that we only have a
mixed State field we aircraft the C type
from where to where and if it was
recommended so that we can filter by
recommended or not recommended
reviews for most of the things this just
means we are just extracting the fields
like here we are just using the extract
object path for is
verified for some of the other fields at
least two of them it means we need to do
a bit of um of Rec extraction like here
for the date usually we're getting it
like this four September 2023 if we only
want the date so the year we need regx
and for this just ask sh GPT just pasted
your example tell it what you expected
to return and did you need recx and then
you just get working code usually that's
also how I did it here same for the root
I just told it that I have strings like
this London to cavic and I need London
and kavic separately so it provided me
this regx here and now we have two
outputs one for London one for kavic and
this
works one more note uh about this there
I thought we could have also used the
destructure note because it's very easy
to to get lots of extractions from those
fields in one note but the bad thing
about it is it's not returning proper
types so if we inserted this here we had
like lots of um yeah we we needed to it
didn't uh work yet it wasn't proper data
yet it didn't recognize that string so
that's why we are doing this with lots
of extract object no PS instead because
it's still
cleaner okay but not too much about that
so now we have our metadata and we have
our main data we want to search upon and
now we are going to the save data graph
and in here it's pretty simple actually
first of all we are put our data is
being put to this get embedding note
because we need this yeah Vector
representation to be able to search upon
it and we move this to the embedding um
Port of the chroma at function then of
course the document itself is so the raw
data is going in here and then we have
our metadata which needs to be an object
which we already have here with keys and
values um
yeah then we are also generating some
random ID maybe a bit long we are using
a random number for between and putting
it to this hash function and then
connecting this to the ID Port because
it looks like they are not automatically
generated if you do not do that um and
in this uh this note here there's not
much to do otherwise you only need to
make sure that um you write down how the
collection or database you want to say
store the data in is being called so in
this case I call the British Airways
reviews and of course if we later want
to read the data from there we need to
know this
name yeah and that's basically it if we
run this it will take a while but then
all our data will get added to the
chroma data base and if the docker
container is running this should all
work and now finally to the main graph
where we actually doing something with
the data and it's a pretty simple
example I will probably expand on this
in the future by using it to explain
function calling so that the AI can
actually um request data on its own and
also set filters and other
options but basically what we have here
is we are having I I decided on some
inputs that which we can now play around
with first of all if uh the user
recommended the uh the uh British AA
second of all our C types economy class
business class and so on please note
it's very important to write it ex
exactly as it is in the data for example
the C here must be an uppercase
otherwise it will not match well here
there is no uppercase and so on then a
question the user wants um the AI to
answer and of course we have some
instructions for the AI so here it's
it's not uh yeah I just put this
together in like 30 seconds so uh
basically yeah we start explaining the
AI that it's supposed to help us um
based on some British Airway reviews and
that we will ask ask questions and it
should also include at least one quote
that's most relevant to answer our
question but yeah you can you can this
can be done better for
sure and now we need to do one more sub
one more step we need to fetch the data
from chrom
ADP and we are putting here the
information about what question we want
to ask and also about the two um yeah
about the the filters we want to set so
we only want economy class um results
and only recommended results on the
Cas let's first run it so that we have
some data okay let's go
in
now the first part here let's go down
first is simple we are put using our
question we have put creating an
embedding and then we are sending it in
so basically that is our semantic search
we are doing we're searching for how is
the entertainment
system uh if it's good or not and then
yeah this part here is um our
object and yeah this you can actually do
very complex filtering with chroma but
the syntax is a bit yeah you need to
know your way around Json objects and so
I kept it pretty simple here um maybe in
the future we can do more interesting
stuff but basically we are now in this
object we are creating an end filter
that means that all these free
conditions here need to be true and now
I said one more thing which I I think
should always be said we only want
reviews of verified uh people so that
they actually took the trip so um I'm
looking for um trip verified in this
field so I always do this there's not
connection to any input and then the C
type is coming from the input and the
recommended flag is coming from the
input and now for this case we would
have economy CLA yes and now this goes
to the wear clause which can be
activated with this input Port here and
besides that there's not much to do in
chroma query um you are of course
referencing The Collection name so in
this case British Airways reviews you
can um decide upon the number of results
so just type how many you want in here
now it's 10 and yeah basically that's
all we need to know and
do and if all this gets executed we can
see it actually returns 10 items uh
let's make this big for a second and we
can see here
um now we are
getting um our yeah the ID we created uh
the metadata we sent in the document
which is the first the headline then a
line break and then the
content um so the the review itself
sorry and then also the distance that
means again like a like information for
which of those reviews is actually
matching the request the query the best
and we can see that for example this
it's always sorted from um ascending as
it looks so this here is the most
matching
one yeah and now we can just return all
this data to the AI and exactly what we
do we are just returning those items and
now in the main graph we are putting
this together we have this very simply
template very simple template here where
we are adding the user question at the
top and we are using again markdown
syntax with headings because um open AI
also uses that a lot so I think it is uh
knows it very well and then also the
British Airways reviews and then we are
getting the reviews here and this then
looks like this yeah not very readable
for a human but because the whole object
is put as Jason in here but very fine
for an AI system and then yeah we just
have a shed note with our system prompt
with the prompt and then we are getting
our answer and in this case our question
about the entertainment system we are
getting uh based on British Airway user
reviews the opinion on the entertainment
system vary some customers had issues
and so on there's also our make our
quotes in here I mean it it references
them by the ID which does not look nice
but still it knows where the dat we can
now check if this where this data is
coming from um yeah and that's it so
this is working and let's do one more
run let's look at not
recommended uh reviews and maybe we are
interested in first
class and now we want to know
um is the crew
friendly and let's run
this okay now we're getting our new
answers does not appear to be friendly
One reviewer mentioned that check in
Step at Singapore abrupt and unhelpful
the steward is in Bole first class
training so yeah there's also again our
quotation
here so yeah that's it basically there's
not uh but here in this case I think it
also didn't pull very many very much
reviews there doesn't seem to be many
people having written there something
about the first class but yeah it does
not matter um as this is just example
data but this is how you can uh um yeah
enhance your retrieval augmented
generation with chroma and I think it's
pretty powerful and yeah probably see
you in the next video about function
calling byebye