hello and welcome to yet another rivet
tutorial uh we already covered lots of
the basics so today we are talking about
retrieval augmented generation um yeah
we will go through a simple example and
if you don't know what it is about yet I
think this will also help you understand
uh why you should use it or why you
could use it uh same as for the last
video sorry for the audio quality in no
video but I'm still traveling with my
laptop so this can't be helped so you
might be hearing my mouse clicking or
other stuff uh yeah will be better in
the future again but let's just get
started um this example is based on our
web scraping uh tutorial already did so
basically what we are doing here is we
are fetching some URL and we want to ask
questions about the
content
and previously we created a very simple
multiple ways to scrape the web I used
the most simple one here which can just
run rivet without any additional tools
so we are just using some subgraphs like
scrape which uh with HTTP call which I
already created in this in the other
project if you're interested in this um
just go to the other video and you can
see all the explanations about it but um
let's just run this
first um there's one big issue with it
um um when we do
this we are already
stripping we're getting the raw HTML of
website and even though I created
functions to uh strip all the HTML code
out there is still lots of um content in
there that has no relevancy like you can
see there is like some JavaScript in
here there is lots of text which is not
from the article but from the navigation
from different things so basically most
of this is not the content of the
article which we are linking here
because we actually uh want to get
content about some block about headless
z um and most of it is just random
stuff and somewhere here in here yeah
the the article is beginning that is
like more than half the content is not
the article and also the end there's
lots of luggage again and that means
that if we count the um the tokens we
"are already at 3,500 tokens so yes this"
can still be can
be sent to shed GPT and um we can ask a
question about it but we are already um
at a high token count so it will be very
expensive
um and just imagine that we don't only
want to ask a question about this one
source but now we have 10 websites and
we want to get information from all 10
of them and have the question answer
then we are getting into uh yeah lots of
issues and yeah let's now make it 100 or
200 websites and we will even
um exceed the 120 the 128k tokens that
jet gbt 4 can handle and also no one
wants to pay for that so that's where
retrieval augmented generation comes
in um basically what this does is um it
Stores um the the source data so for
example everything we have from the
website here um in a vector database
first and then uh using embeddings which
are like a tokenized representation of
the data we can do a search to find
similar things and so in this case we
want to know who lyia Infante is this is
the author of the article and there is
some information about her in the
article so 99% of this article is
irrelevant or this content but there are
some parts at the end of it where um and
and other parts where some information
of her is like like here this is her
website and we only want to do that
so what um having a vector database um
or vector data helps us is that we can
actually find those pretty efficiently
those parts that we need and then we can
feed them back to uh shed GPT and only
those
parts and let let's quickly Jump Ahead
to that so basically this was the
question with lyia Infante and once we
do that we are only returning this
content to shed GPT we are giving it um
a text about here I'm the senior C
manager asenti a modern headless CMS you
can follow me Le in Fant and some more
information and this is still not all
super relevant but everything at least
contains her name and the big thing the
most interesting thing about is now we
"are down to 515 tokens from 3,500 tokens"
so with this simple graph here we can
already return much less data and we
could even even get this value small
small by improving upon it but I want to
keep this as a simple example that is
understandable and so in the end what we
are doing is we are feeding our question
plus our filtered information so only
what we got from the vector search to
shed GPT to ask it um to build a prompt
who is ladia Infante and give it the
information and then yeah we have a
simple um system prompt which just
explains that it's helping to answer the
questions and how it's supposed to
answer them and now with this data it
can answer our question pretty nice as
we can see here based on the information
provided Lydia infanty is the co manager
eternity background in business
psychology and so
on okay so yeah we um we are going a bit
from the other way around now you know
what it does but of course you don't
know how it does it yet so let's just
straight jump into it I will skip this
scrape with HTTP call part because that
is explained in the other video but we
will now start with this subgraph here
store data in Vector storage because
before we can search on the data we
first need to store it and as you can
see here we are sending two things in
here one is the content so basically the
the content of the website we scraped
and the second one is the
URL and let's go into the
subgraph as you may note uh rivet is
getting a bit slow because the
embeddings are creating lots of data
which is in the history of the which you
can see here everything and this is
slowing it down a bit so I could make it
quicker by um going to clear outputs
here um and speed it up um but yeah for
the as you can you can see better like
this so I will keep it even though it's
a bit laggy at the
moment okay and basically here we are
doing two things let's go start here
we're taking the URL and we are using it
to create a data
set and data sets are basically
everything everything you can see here
in data studio so we already created
lots of different data sets and please
note I do not set the data set ID so
it's dynamically doing it that's also
why there are now multiple data sets
with the same ID I could have done it
differently so that has the same ID um
so it can only be created once um yeah
it's it's basically it can be done
differently as well but this in this
case we are have getting a dynamic ID
here so this is where we want to store
the data
data and then before we SC store the
data we of course need to to split into
smaller parts called
chunking uh and there's this chunk Noe
here as we can see we can um decide
which model is doing the chunking um
this is yeah um and how it's being done
and we can decide how many tokens a
chunk is so that is basically how long
the text will be that's being
separated um I think Super roughly it
token might be like around a word or
something but it's not exactly like that
it's more
complicated um and then we can also say
how much percentage the tokens are
supposed to be
overlapping we will see why this plays a
role in a second but basically what it
does now it gets this input here and as
we can see it splits it into smaller
parts so this is one 100 token part and
the next one and so on and also now with
the text down here it's all being split
up but we're not doing it very smartly
as you can see here it's just also
cutting texts into half so um we could
do this all I mean this this are all
improvements we could do but for now
we're doing a basic example and this is
good enough because yeah because we have
an overlap so the sentence will always
finish and also because yeah it works it
works so it's good enough for the
moment okay after we get our chunks so
now we have as you can see we have 51
chunks Now 51 parts we are going to
create embeddings uh subgraph and very
important this subgraph is set to split
so it will be run once per um
chunk and also very important we need to
change the max value here because the
default is 10 and we have 51 chunks so
if we do not change this we would only
get 10 embeddings and it would not work
let's go into this graph uh it's fairly
simple now we as we can see we are
sending 51 chunks in here it is running
51 times and let's also see somewhere
there's also a relevant text in here
here um and what we are doing now is we
are just running a get embeddings
function it's very simple there's not
any not really anything to to set in
here we are using the open AI embedding
function which is fairly cheap and uh we
are sending the chunks in there and we
are getting embeddings
out and we are also sending the chunk
out here because we need to have both
both together we need the embedding to
be able to search it and then we need
the the original text to be able to
return it to the AI
later okay um let's go
back so we have done the create
embeddings one as well and now it's
fairly simple what we are doing we are
just appending um all this to the data
set and our data are the chunks so this
is the the raw text that is still
readable I mean at least if it's not
some strange in JavaScript and then we
are also adding the embeddings and of
course we adding all this to our newly
created data set so that's why the data
set ID is going over here and now if we
go to data Studio it will look like this
so we have one table and we're creating
uh with our data set name and as
randomly generated ID and then we have
all the chunks in here in a um as a
row and also the IDS here also getting
randomly generated because we do not set
them um or may we just don't care and
then there's this symbol here which is
not very self-explanatory but basically
if this picture is here and if if we do
hover it with the mouse we can see that
this is the information that there is
also an embedding stored for this data
set and once this is there we can even
already here do some um some semantic
search so maybe let's see what other
information do we have in the text maybe
we want to search about content
management system about CMS let's see
now we have done a search and we can see
that it gives us a ranking and has given
us lots of results which might be
applicable and this ranking is basically
uh yeah this is the most matching one so
we can see here it even starts with CMS
and it is definitely having this word
multiple times in here and then um as
this drops the it gets more less likely
that it's in and also if we just search
something that is not in this text like
auto mobile we should probably get no
result
results even now it's still returning
something I'm not sure why but but
basically that's the idea so we have a
semantic search which can now be used
and of course we're not doing it here we
will now do our semantic search um in
the
graph so back to the main graph we have
now done the storing of the data and the
vector
storage and now all that is left is
going to be to retrieve it and for this
we are sending two things into the
subgraph we need all question so what
what uh for what do we need to retrieve
data and we need our data set ad to know
where we are retri trying to read the
data from let's go to this
subgraph here we have those two
inputs and now um this is a fairly
simple thing first we also need a
tokenized representation of our question
so we need to also get an embedding for
this one so we're sending the question
in here and getting it and then we have
already the data set ID in our graph
input and with both of those values we
can now do a k nearest neighbor search
which is like a yeah standard Vector
search the one I just showed you in the
data Studio to get our best um matching
uh results and very important here we
can actually decide how many results we
want that's also why I said we can
probably reduce the token count we could
also only give the top one or two
results to the AI if this is good enough
but with five we are very safe that um
we will get all the most relevant things
but yeah basically we can now see it
returns us the same things as we saw
before this data
here so okay um we're not really
interested in all those additional meta
information like ID and distance so we
are now using extract object path to
just get the data field and as we can
see here now now the first entry is
actually just text which is helpful and
in the end we are now having multiple
parts and yeah that's all our output for
this
graph back to the main
graph now first of all Just for
information we are calculate calculated
the tokens here we already saw that
before so basically those two graphs
here this on the right part can just be
ignored or removed but what we need to
do now is build our final prompt for the
shed so as we also already saw before we
are putting together the question and
the data sending it in and then we're
getting our answer and yeah that is
basically it um this there's lots of use
cases for um handling this usually you
might also want to store big amounts of
data first maybe you want to read like
um 10 lots of data from PDF files or
from some text files and store them in
advance and then have um the ability to
search on them and there is also a
future um
possibilities of giving the AI the um op
to thejust a function and letting it
decide if it needs to pull data from
this additional Source or not but this
is getting more complex and yeah so
basically this function calling and this
will be covered in another video okay I
hope um this is helpful and you
uh uh yeah
so please uh leave me some feed back as
always and of course like And subscribe
and see you in the next one
bye