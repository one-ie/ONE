hi guys welcome to a short tutorial on
how to use or how to get the Google
search results and use them in Rivet um
for this tutorial we will be using serer
because they offer a very simple a and
reliable API to do this and best of all
is I mean basically you can get 2500
free queries so that's a lot I assume
this will be more than enough for most
uh for everyone who's not trying to use
this professionally in the end and build
a real project on it and as also stat so
you don't not need to add any payment
date or anything so don't worry about
being built um yeah quick quick word I
have no affiliation to them uh I just
used them as well in another project I'm
building so basically what would you do
is just sign up here I think you can
also just connect your Google account or
something and then it's super simple uh
right okay once you're signed up you can
just sign in and then you can see get
your account and you can see I've been
doing 516 requests and I still have
"1,900 left so as I said it's a"
lot um and the most important thing is
here here you can get your API
key and you will need this of course in
the rivet project I'll will show you
then and then we have the
playground and in this playground we can
actually we can actually use it to see
all the parameters we need now first of
all don't worry about my API key being
shown here I will just uh reset this one
I mean there's a reset button here so I
will just create set it back to another
key after this uh video is done and
usually would see what you would see is
um I think nodejs standard you see how
you can now integrate this API with all
those parameters into some programming
language and you can also check out the
results so it's a bit like the C GPT
playground if you've used that one you
can change parameters you can search and
you can see what
happens um of course we don't need it
this way because we want to do it in
Ribbit so I think the easiest found
thing I found was the HTTP view because
it gives us a very very uh good list of
all the parameters we need and let's
also reset all the standard parameters
so that we
can um know what all the parameter names
are um yeah and we will only do it for
the search and uh there's also options
to go for the image search videos and so
on so then some things would change and
some parameters would change but let's
now focus on searching for a keyword and
wanting to get the the results for
that and very quickly um as you can see
here this is how the results will look
so you can really um basically all the
information you will also have uh when
you open do the Google search yourself
for example you also get knowledge
graphs this is like the special box
about the Apple company that that uh
Google will show when you are searching
for Apple Inc with all the lots of data
about the company then you will get the
organic
results as you can see here so this is
one organic result with the title the
link the Snippets so a short description
and the site links and of course the
position and so on and so on so you'll
basically get all the data that you will
need and much more so in this request we
don't see all the data at all but
there's also related searches and there
will be ratings of website if there were
ratings of websites sometimes those also
shows the ads that has been so the the
Page search results that have been on
top so you basically get everything you
need and yeah you can you can access it
from lots of different countries so if
you want results uh from Germany that is
not an issue um or yeah so you can be
specific about this and this all works
okay but now let's jump into
Rivet
um I copied this uh uh part of the how
the request could look out of um of the
playground so we can take a look what
all our parameters are so let's let's
have a look on this so um basically we
can see if we look at this that we need
to do a post
request that is typically if we want to
send off some form or some
data then we can see that our
host that means uh the the domain we
need to send the request to is Google
do.de and we need our rout here is/
search so we know how to build our URL
for the request then of course very
important we know that uh we need to set
our um our access token s x API key and
we need to set the content type
application Json and then down here we
have all those parameters so for ex Q
This is where the query goes in and L is
where the country goes in and HL is
where the language goes in and
autocorrect and so
on
so what I did now and already prepared
so that we don't have to do it together
now because it takes a bit is I've
created
inputs for all of this already and I
also inserted values for them so let's
remove this up
here so let's start with the the lower
ones here so most important there is the
query
by the way I renamed those notes so that
they are yeah easier to read but I put
the what type of note they are in the
brackets here text so you can still see
this's a text note but it's it's not
supposed to hold the query so maybe we
are searching for chocolate cookie
recipes in country us with
English and we want the auto correction
to be on We are searching on page one um
of the search results for this word and
we want 10
results pretty straightforward
now the one thing we need to adjust is
this here this is the serer API key and
for this we're using the
context the context is a pretty
interesting thing because
basically you can go to the project
setting here and you can set some
additional variables here that not
everyone is supposed to
have so I set the API key in here as you
can see so I pressed add context value
and now I I have to add something that
is named the same as I named it in the
note here so it needs to be
seror API uncore key and this is what I
created here and the value is of course
the API key and I also take this to make
it hidden I mean you saw my key before
so it does not matter now but the
important thing about this is if you do
it like this and you share the project
with someone else you will not share
your secret key so if I share this
project here this is not going to be
included in your project and someone
else and you need to set it up yourself
so that is a way of protecting your uh
yeah your keys it's kind of like
environment variables in in usual
software
programming okay so basically this is
what this does here this is getting so
we can run it this is getting the key
and this is the key from
before so at least here now when you run
it you can see it
okay now what we need to do is two
things so after you edit your API key
and you have this in here we need to uh
create a header and body content for the
for the request and we need to fetch the
data and for this maybe let's start at
the let's start at the back of it so we
need to make an HTTP
call and as you can see at the moment
this does not have inputs and I mean we
cannot hardcode all those so that
doesn't make Mak sense so we need to
make the inputs available and what do we
need
um I mean we can we can probably just
select post here as I said before we
need a post request and there is no we
don't need this as an input for um so
let's just do post and the URL I mean we
can put it here we can use it as an
input let's maybe use an input for
this but it's optional but what we will
need uh to be dynamic are the
headers and the body
and for those there are these buttons
here which now State useing input port
for headers let's tick it on and this
same for this
one now we can see our HTTP call is
using post and we have three inputs the
URL the headers and the
body so let's create those three inputs
so and I will also name them so that we
can probably probably see so URL as a
text URL goes
here then we need an object for the
headers because those here those ports
both um as you can see here if you hover
them they expect an object so this is
expecting Jason actually a Json object
and this one um can take a string but as
we saw in the um in the playground this
is also expecting an object because
maybe let's quickly go back to this um
we can see it here this is clearly an
object okay and also while I'm here I
can copy the the port because I didn't
copy it before um and we can put this in
here so and it was Slash search I hope
but I'm very sure about this okay now we
need an object for the
headers and for this we also need to
take our
two things here um so we need the X API
key and the content type I'm not sure
why it's adding the content length it's
not not necessary it's a bit odd it's
also not adding it in all the languages
so I I don't I don't really understand
what it's doing there so we are going
back here and now let's put that in and
of course this is not valid valid Jason
yet but we will make it now so let's put
this
in
and let's indented and let's add the uh
the key value pairs we
need this and this and this and this and
there also needs to be a comma so yeah
so this needs to be proper valid Json
syntax and of course this here we want
to be from I me I mean you could put the
key just in there it's fine it works you
can do it like this but if we don't do
it in the nice way we will just you do
you create an input variable here so
whenever we in in most of the at least
in most of those input Fields here if
you create um yeah this double brackets
open them and close them you can and the
name you create a new input this does
not work everywhere be be aware of that
you need to test it out not every node
has this capability but this object node
has
it and now yeah we basically have our
first part those are the
headers and we're now connecting the Ser
API key
here and then we can already put this in
headers and the URL can go
here and we already half C done as you
can
see now we need a last
object
it was a bit dump for me to to to delete
this this object up here because now I
always have to go to back to the website
but oh well um because now we also need
the body so we need to have what what
are we posting what are we sending as
input variables over to uh the
application to be used so let's go one
time back and now we are copying this
out
here okay we're going here and
this is already a valid um Jason as you
can yeah Jason as you can see I will
just make it look a bit nicer so that we
can easier read and edit
it and now basically what we will need
to do is we need to add lots of
variables so we need to add one here and
this is the
query we need to add one
here okay I messed up
sorry and this is the
country let's just copy it's
easier so we need the
language okay one thing we need now need
to be careful about is um there is a
difference um if something is a string
or not so those are of course all
strings the query is a text those are
two but here you can see this is not a
not a string because there is not no
quotation marks so this should not be
pass as a string because most likely the
um API will reject this if we do so we
need to not add the quotation marks very
important here and this is now the
autocorrect input
field and please also note the the
editor at the moment tells us that this
is wrong but it's okay it will realize
once it get the input values that it
works but um for the moment the the
validation here is telling us that this
is not going to work
work because yeah it doesn't look
doesn't look like proper syntax at the
moment for it okay this is results so
now we set up lots of inputs we set up
query country language autocorrect page
and results and we just connect all this
up our query our country our locals our
language our auto correct setting if we
want this on or not our page and our
results and all this is going to the
body and
basically let's see if we messed
up no basically that's it and to make
this a bit more readable because at the
moment as you can see it's a bit hard to
tell this let's add one more
note and this doesn't make too much
sense now because we're using instead of
the Json output the the the the body and
and using extract Json again but I like
to use this because we can just make
make it easier to look at it so usually
if you want to process this data just
use the Json output but for this case
now you will see why I like to do it
this way because now we are getting a
well structured Json in this one note we
can look at so we can basically see we
have been searching for chocolate cookie
recipes in U for us uh English with 10
uh results the auto corrects true page
one we are searching Google and we are
showing search results for this and then
we're getting our results and yeah here
we already have a result where we get
much more data so for example for the
first um for the first organic result in
the list we also get um yeah ratings
from users and how many ratings we're
getting an link to an image um and so
on and yeah that's it that's the first
step to get the results in and basically
now it's up to you to use them any way
you like it I hope this helped you
um and if you like to see more uh yeah
just tell me how you would like to to
see this
continued um if there's any other
feedback on this video that would also
be super
helpful um and generally yeah please
like And subscribe okay see
you