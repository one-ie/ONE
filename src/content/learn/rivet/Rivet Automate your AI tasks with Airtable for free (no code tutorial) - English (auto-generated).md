hi guys today I have a really cool video
for you because in the end I think most
of the people who are using rivet are I
mean most lots of people are prototyping
but there's also lots of people who want
to automate something I mean let's have
an example maybe you want to have um
your personal AI secretary and you want
to write some emails let's assume we
have a letter intent like yeah there's
Christmas wishes we need to need to sign
to someone and the recipient is called
Santa Claus and we have a relationship
is family so it should be rather un
informal not formally not formal mail
and now we want the email content for
that and we also want to send a sick Lea
announcement to our boss and and so on
and if you want to do things like that
in Rivet I mean yeah you can read in
files from your PC to to read in the
data if you use a plugin you can write
the data out in files but it's all on
your local machine it's not in the cloud
it's I I don't know I'm personally think
that rivet has uh yeah is a bit lacking
in this regards um so let's just use air
table that's what we are here on because
air table is pretty cool um because they
have a free tier which has basically no
limits that really matter you can use
the API as much as you want there is no
time limit you don't need to add payment
data you can um create unlimited tables
and bases and the only thing is okay
"it's only one ,000 records per per per"
base okay so you cannot do gigantic um
tables but come on I I for a free tier
this is pretty cool so what I will show
you now is first of all let's just run
this and let's see what happens because
uh we have the
graph and we will just run
it and basically what we're not doing is
we are pushing the the information I
just showed you the the yeah the
information about the email um contents
we need um into uh to shet
gbt and then we are um going to update
the tables but I will show you the the
details of that later okay so as you can
see here the last thing we have status
codes 200 for updating so we should
actually be finished with that let's get
back and see oh ah yeah there we
are so now we actually have four emails
let's look at the first one which was to
Center close yeah I hope this message
finds you well and not to overwhelm with
the festive season and bustle as we
gather around the warmth of family and
friends so yeah we crested a more more
nonformal email we got one let's look
here what do we have we have the email
to our boss for sick
leave and yeah we have a obviously we
have a rather severe flu and
unfortunately we they cannot come to the
office I mean yeah exactly what we wrote
here but I mean you see this is the cool
thing now we have basically we defined
some inputs and it can be whatever we
want and we can get the output and we
immediately have it now in the cloud
available in tables and we can we can
can do F stuff with it we can exit it
from other tools whatever we want so I
think this is super super useful so let
me show you how it's
done um so first of all of course you
need an air table account you will not
get around that but as I said it's free
so no issues there
then um actually at the beginning let's
go to the homepage here you will need to
create a workspace and some tables in
there but to be honest this is pretty
self-explanatory I think you will figure
that out so I will not cover it deep in
here this is easy um but then the the
one important thing is you need to go to
the developer
Hub and in here you have to create a
personal access
token so I already created one here
which is called rivet test which I'm
using at the moment but let me quickly
show how it works you just press create
new
token and then you give it a
name and now there is basically two
things you need to set there's the scope
so this is basically what is this token
allowed to do and for our use case we
need to to read records from tables so
we need this data records
read and we need to write because we
also want to write down the results
later so we need the data records right
and then you need to Define what um yeah
where it has access and for example here
I selected my rivet test
uh
environment and then you press create
token and yeah you get your token so
here it is you just copy it out and
that's
it and before we now move to to uh
Ribbit let me just quickly show um
basically there is um they have an of
course an API reference here and there's
basically two functions we are going to
use one is uh list record
which is a very very simple function we
just need to do a get request to some
URL where we need to add some base ID
and some table ID or app ID could be
called and then we get the all the
records from a table so this is to to
get the data we want to to to work with
and then we need to update
records and this is a bit more complex
because of course now we need to pass in
some data that is supposed to be updated
and sadly I found out that rivet does
not support patch requests so we cannot
just update this one field which has no
data yet um because we need to do a put
request and the put request is a
destructive update so we need to put in
all the fields but yeah it's it's minor
things uh can be worked around with okay
let's go to
rivet okay as you can see
here uh let me maybe unclear the outputs
for the second to make it a bit easier
to
see um the project this is basically our
main graph and it's neatly organized
into subgraphs and different things so
it's not that complicated and I also
wrote some small instructions here but
basically the one thing we will need is
the the a table
token um I like to use get to use to get
this from the context so you go to
project and you add a new context value
here you call it air table
token and then you put the value of the
token here this is just a yeah a good
practice so that if you share the
project your token will not get uh yeah
no no one else will receive your
token and the second so this will then
automatically appear here once you run
the
graph and the second thing is um yeah to
put you need the full URL to the table
you want to use so I made it simple that
you don't have to manually extract this
app and this table ID this will will be
done automatically so you just copy the
if you're in the table just copy the
whole URL in the browser and insert it
here and everything else will be taken
care
of and then there are three steps we're
going to do first we're are calling a
subgraph to list uh the app table
records then we will handle each record
and then we will update each
record I mean of course this here below
could also be done in bulk but I thought
it it was simpler to do it this way
because we're not updating thousands of
uh yeah of uh entries at the same time
just a small list in this
case okay and let's have a rough
overview um I'm not sure if I should go
too deep into
it um but let's take a rough view at
what's because it might be take too long
but let's take a rough view so first um
now we have we are inserting this air
table Tok this air table URL and the
token into to our first
subgraph as we can see here the the
subgraph then also has those two inputs
token aable URL and then we actually
have two subgraphs again
one uh which just um uses some recx to
extract those two um parts from the URL
um yeah again if you want to create
something on this your own just ask CH
gbt for it I did not write that very
simply put uh because that that is also
too get getting too complex for me
um and then we are also creating uh the
authorization headers or the headers in
general we we need and we use both of
those things in multiple parts so that's
why we put them in new sub
graphs so let's go in here and actually
maybe let's run the graph so we can see
values everywhere maybe it makes a bit
more sense
so so we are getting our headers with
our with with our bar token in we are
getting the two IDs we
need and now for the first request which
is very simple we just need to build
this URL which consists out of the app
ID and the table ID that is what we are
doing in this text field here with two
variables and then we are sending all
that into an HTTP
call which then returns us a nice Json
object of our records so basically here
is now the information and I mean the
level here doesn't really make sense so
we are extracting everything in that
here and now you can see we have a
wonderful yeah easily digestible array
of our information we know the record
IDs and we have all the fields and the
data and as we already I mean I did run
it two times now we already have data
from the previous uh yeah from the email
content that was previously added most
likely if yeah the table would this
would been empty this field then this
field would just not be in this list
okay and then we output this uh this
array and then let's go back to the main
graph then we are coming out here and
going to the handle air table record sub
graph and most important thing here is
again I mean I explained it in other
videos is this icon here because this
means that we enable
splitting and what splitting means is
that this array here automatically gets
um split into parts and basically we are
now doing like a for each operation so
every single sub array every single
array part of the array entry of the
array sorry is separately going in this
so it looks like this this is like the
first sorry this is the default value we
I it for testing let's remove that uh
this is the first entry for the first
run first we are writing uh an email to
Cornelia Claus and then the second one
is the one to Center class and so on so
you can see every entry is separately
getting sent in
Here and Now what we are doing is we are
just prompting chat GPT so I'm telling
it it's a secretary and drop is to write
emails very lazy gives little
information you cannot ask questions you
only reply with email content and so on
I mean random stuff we can do whatever
we want here and we also add the user
content and now this is in this case a
bit stupid because we are already
telling the email content that was not
the plan so let's actually go once back
once more and make run this again so
that we have this clearer so I will
remove this data and because now it's
really getting in our way we cannot
properly see anymore okay let's get back
to rivet and let's run the graph one
more
time okay and now we can see here
usually we would only give him we are
lazy he would only get this information
from us that we are the recipient who
the recipient is what the relationship
is and so on and this is going to do
shed GPT and now shed GPT is writing our
emails okay and now because we yeah
don't have the ability to do the patch
request as I said before we need to
rebuild this whole object here with the
fields and all the fields and the
previous content of the fields and the
new content so basically we yeah we are
pulling out the original content like
the original value for the recipient for
relationship for letter intent and
adding the new field and then put from
from up here and putting it all together
so this is now our new t uh object for
this
row which um yeah is now previously did
not have the email content now it has it
and then we are outputting this and we
are also outputting the ID from here
because we need to know what the record
ID is so that we can update it
later okay and now we are back here and
we are directly going to the subgraph 3
which means that where we are going to
update the air table records let's jump
in and here it's pretty much not so much
different we are again creating our
headers so using this subgraph up here
this function we are getting the IDS
from the URL again now we are putting it
together a new URL which is in one is a
bit different because it also includes
the record ID but that's yeah not hard
we are doing a put call this time and we
need a body and the body is our fields
we want to
have yeah and to to be able to check if
everything is working we are outputting
the status code so that in the end we
can just look here and if this is
everything is 200 then yeah that worked
but
um if there are other values is showing
up and there has been some hours and we
can easily go in and debug
it yeah um basically that's it as you
can see I removed it again now we are
back and having our email text again so
um I think this is a really cool way
that you can
um yeah actually uh um start um do the
configurations for for some drops here
and can get the results here you can of
course also write the results on
different or separate tablets that's
also all possible but I just wanted to
show you uh yeah a simple use case as
always I hope you uh found this helpful
please like And subscribe or comment uh
to get me going a bit uh yeah and see
you
bye