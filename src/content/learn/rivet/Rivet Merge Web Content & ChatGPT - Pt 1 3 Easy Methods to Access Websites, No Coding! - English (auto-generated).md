hello and welcome back to my channel um
today we will be looking at web scraping
and how to do it in Rivet this
topic I think most people don't
understand uh that it's far more complex
then you think even though it sounds
pretty simple to just fetch the content
from an URL and maybe just get the text
or whatever there is lots of things that
can uh be an issue um and we will just
go through
three different solutions actually there
could be a fourth but I'm I will just
mention it to you I think you will
immediately understand why this is not
reasonable to do even though it's the
easiest one and yeah then we'll see so
basically what we will do is look at
three different options we are looking
at our scraping with a simple HTTP call
note in Rivet and I added a bit bit on
top of that to make it yeah still a bit
better um then doing kind of the same
but using the browserless API which they
have a free account you can create where
"you can I don't know strape like 1,000"
Pages a month or something for free
something like that and then we're also
using doing the same thing with
extractor API which uh does handle
things a bit differently and they also
have a free
account so first of all if you want to
check this out I wrote a small
description here but most important
things are please add your keys to the
context so we need a browser list API
key and an extractor API API key um and
then your uh data in
there okay but let's jump in and
generally what this graph is at the
moment is doing is we are opening a
website we can configure here by adding
the URL in this case it's some C block
writing something about B2B content
marketing and then there we have a
question we want jgpt to answer based on
that website's
content okay let's look at our Solutions
first okay this is the most uh yeah this
is one of the the easiest
ones let's actually quickly run
it oh yeah it doesn't run from here okay
um let's run it from
here and go
in so basically we are just using our
URL as a graph input here and we're
putting it into an HTTP call note and
yeah we defined that URL is an input by
setting this check mark and now we're
getting all the content of the
page and let's first get here what we
usually get if we just take the body out
is the raw HTML and as you can already
see here it's
"620,000 characters"
long and that is also why um the method
I will not show you yes we could could
put this as an input to shed
GPT GPT 4 the new GPT 4 version with
128k context window can probably handle
it but if we do that I um you will
probably pay like a dollar per request
and it will take very very long and it's
just no I mean if you're rich and you
don't mind go for it but I don't think
this is reasonable thing for anyone to
do so what I actually created is is I
tried in Rivet to do as much as I can to
to strip out the HTML let's look into
that function we are calling here in a
subgraph so this is getting the raw HTML
here the super long string and then
first of all we are just extracting the
body by using red reg X that is still
pretty simple and I mean the user never
sees anything that's not in the body I
mean maybe besides the title in the in
the in the from the website in the
browser but so we can we can skip the
other things like the
headers and then we have some code here
which is just doing pretty simply
searching all the HTML Texs because they
always open with close with certain
brackets and just remove them this gives
us a kind of okay text representation of
the website but please note it contains
like everything there's also the
navigation in here and it's all pretty
unstructured um it's not just the the
article or whatever we interested in and
there's also some stuff that we were not
successfully removing like here is
Javascript down here and some jQuery and
stuff we don't need so this is doing its
thing and we will later see how much
better um that it's already yeah already
much better but it's not not exactly the
um yeah it's not exactly the best
solution also very important about this
note here and if running this is um this
is with most websites you need to change
the executor to the browser to the note
note H sorry to
note uh otherwise you are often getting
security issues so if I try to run this
for example this website my browser I'm
getting an arror here and in general
that is the main thing anyways if you
just try to open websites from your PC
there's so many techniques to try to
prevent that there's lots of Bot
detection there's so many things that
could
happen and that's why we are going to
look at solution
two so browser list is a is a service
that allows us to yeah that they start
some virtual machine that they start
some uh some service somewhere or I mean
just use it to to access the page and
they have proxy service and lots of
different techniques to to um show them
that this is a real user and the website
and tries to trick their security system
so this is far more reliable they are
constantly working on on making it
possible that you can open uh
websites and basically yeah this is the
same but we are now using their um AP
API for it so we are creating we have
another URL we are opening where we need
our token
we are pushing in the URL in the body as
an
object and then we have the same thing
we were returning the raw HTML they
givers and the text and basically this
also we will see later this this gives
us the same results I mean this is just
um just making it that we won't get
issues by trying to do it from our local
PC here so this is just the more
reliable method and as I said they have
pretty generous free credits so this
might be an option even without p a
scent for
you and now we're coming to the third
solution extractor API and I've been
searching very long to find some
solution which helps us a bit mitigating
the issue that we are yeah just trying
to somehow find what the proper and
relevant text of the website is so
because in an Ideal World we want the
article you just want the main article
and we want the text of it or to be
honest best would be like a markdown
representation which still has the
headlines the structure the links the
tables but I did not find anyone who
provides a service like that and there
is no way I mean I didn't mention it
before but there is no way to do this in
Rivet with the code note because you
cannot import any libraries so if we
want to stay in no codes or in only in
Rivet this is impossible if you use
Python a beautiful soup then there's
actually I'll have some scripts lying
around but you can do it um but if you
want to stay in here no no there's no
possibility but but even if you do it in
code it's still it's still pretty
challenging okay so this is now
basically also just doing the same we
just using their API so we need a custom
URL with our API key the URL and what
fields we want and we're making a call
to them and then they actually give us
two representations of the website I
mean they could also give us the HTML
but that's not very interesting
so um I've we are retrieving the text
representation this is um yeah uh only
the the text they think is is the most
relevant text from the website so
hopefully the the article or whatever we
are trying to to to find the content
from and then they also give us a raw
text which is a full text
representation okay that was a very long
talk um what we now have here is we are
going to run the same URL and the same
question and we are actually running it
through those
Solutions and let's Press
Start ah yeah I switched to the you can
immedately see I switched to the wrong
to the wrong executor here and this one
failed so sorry my bad let's run again
with a note
executor and as you can also see I mean
this one here was is is by far the quick
method so that's the nice thing nice
thing about if you do it with rivet you
are quicker than any external service
and especially extractor API is very
slow sometimes can take like 10 seconds
plus to give you a
reply okay but let's not get hung up
let's look at the first solution this is
the rivet
only and yeah we are getting a text
representation here we already looked at
it
before and if we put this to to to J
we already have pretty yeah we already
have a lot of input tokens
"5,600 so that means we can actually not"
use uh sh GPT 3.5 anymore that's also
why I put this to GPT 4
Turbo I mean of course there's also free
56k or something so doesn't need to be
like that but just to show you that is
already a lot of tools so this was
0.06 so 6 Cent actually
not too
cheap um but chpt managed to answer the
question out of the website content so
this worked our text representation here
which looks a bit Jank was still good
enough for it to to be able to do
it now we have the second case for
browser list and this is basically yeah
you can see it's exactly the same as I
said this is just a service that helps
us to to um improve the the crawlability
of the website sites or the yeah that
the scraping goes fine um somehow
there's free tokens difference
here but doesn't matter and in the end
we also getting a proper answer and of
course the answer is not not the same
because jgpt is always giving a bit
different
answers okay and now we are coming to
the last
candidate and let's take a
look this is the the text representation
it found um just containing the main
article and this is look at the website
this is pretty good this is exactly how
this article
starts and this is a good representation
um what I'm not so happy about here is
they have no headlines in as I said
before no headlines no structure I
assume that tables and stuff like that
will get completely lost
so it is okay but it's not the yeah it's
not the best representation of a website
and if we look at the raw text then yeah
they have a bit of a better way of uh
yeah it looks a bit cleaner than our our
uh the thing that created with my method
here but it's still kind of the same
it's just a lot of text which is a bit
chaotic and lots of keywords from menus
or
whatever okay but I put nonetheless I
put both of those in as to shet GPT as
well and what we can see now is we
managed to reduce the tokens by a lot so
"this is 2,000 tokens before we was at"
"5,700 so this is actually"
enough tokens to be able to put it into
shed GPT
35 and at the moment now we paid yeah
two 2.5 cents for it with J gbt 4 and I
mean it was able to answer properly in
both cases this is these are correct
answers from the article to the
question so we are
already nearly three times cheaper so
let's actually move to shed GPT 35
turbo let's rerun it and now we will of
course see that everything fails but
this one here because uh yeah they
exceed the tokens we can only do
"4,69 um and we can see that extractor"
API is really
slow okay but now we have our answers
here and now we have
paid yeah a fourth of a scent and the
fifth of the scent and we still have
proper answers to our question this are
this is what was written in the
text
so this is why it's super important that
this we actually take care of this
um because in the end if whatever you
have running or maybe you want in the
future to we want to extend this and we
want um CH gpt2 doing its own research I
mean I did already did a video on how to
to to uh integrate the search results
from Google into into rivit maybe we
want shbt first to to to trigger its own
search then we wanted to decide okay I
want to open those three four five
websites and then I want to have the
content of those websites and then I
will give you an answer you know um then
it is it becomes very important to take
care of those tokens
and yeah this is uh probably the first
part of a series is because there are
more methods to handle the tokens but
this is one of the first so if you want
reliability you should probably use at
least an external service like
browserless and if you want to if you're
fine if just from just getting a text
only representation which might yeah
remove some content um then extractor
API and and you also don't care about
the speed to be honest then extractor
API is also a good uh solution but
coming up in the future we will probably
also talk about retrieval augmented
generation because that will be for sure
a way to make uh yeah make the our
representations um from the text much
smaller and only serve the necessary
parts to uh shed gbt so yeah if you're
interested in that stay tuned and as
always this example will be in the
description of the video and yeah feel
free to like and comment and give me any
feedback or maybe also suggestions what
you would like to see in the future and
I hope this helped you thank you very
much and see you