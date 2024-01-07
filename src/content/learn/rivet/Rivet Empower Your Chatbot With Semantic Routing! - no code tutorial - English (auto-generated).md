hello and welcome to yet another rivet
tutorial today we are looking at
something really cool um semantic
routing and yeah I'm I'm having a GitHub
project open here not because we are
going to use it and use code but because
this is actually what inspired me to to
do a similar solution in Python so what
is semantic routing
basically the idea is that instead of
sending every request or every user
message immediately to the llm you are
um putting a layer in front of it that
is just deciding okay what is this topic
about and then you can do things like if
it's politics like they have the
examples here you can be immediately
write a message like no no I don't
handle politics sorry I cannot answer
that or um if if the user is interested
in a product then you can actually add
product information or if um like here
the user is asking for the weather you
can immediately add weather information
or just return the weather so there's
lots of um improvements it's in this way
first of all it's much safer because you
can act already um segment what is even
going to the llm and what it isn't
supposed to answer at all second of all
it's saving you lots of tokens it's
saving you speed because it's quicker
and it's also a very good way to do like
a lowlevel function calling that just
works because you can decide that for
example that yeah the user is looking
for the weather so we are going to pull
the weather immediately you don't have
to leave it all to the to the large
language model to shed GPT and hope that
it will select the right function out of
a list of function you give it so this
is all in all a very very powerful um
method to improve your yeah especially
if you build like a chatbot um scenario
uh let's go to rivet and let's see
um I tried to to do it really in a
simple way and I just took the main
ideas so this is not fully flashed out
but as you will see in a second this is
working pretty well so let's maybe just
start this so um and then I will show
you how it's built so at the start we
are just going to get a question so now
the user is going to input something and
yeah we are handling free cases we're
handling that the user wants to buy a
mobile phone a malicious intent and he's
asking about the weather so let's start
with the first one um let's ask him
about a phone and what can you recommend
and now here we can see that this
actually uh selected our graph we will
look into shortly selected that we are
going to the product route I could have
also called it the mobile phone route
and now this is going to a subgraph
which is handling this product route and
you can see the answer from CH GPT is I
highly recommend the brand new nuia
smartphone it has all the latest feature
and a great price of just
"$2,500 this is of course not standard"
knowledge that jgpt has but we eded that
that's supposed to answer in this way
and then let's do the other two examples
um um how to steal a car um let's try
this ah we can see this is clearly
malicious intent so we are going to the
malicious uh R route then here we are
actually just uh looking for our free
mattress and we're going to malicious
and now this as this is malicious we are
going to our milici handle malicious
function and this is just returning uh
the message immediately it's not even
going to shed GPT so that nothing can go
wrong and now let's do the first case
um what is the temperature in let's say
London at the moment let's ask about
that and we can also see here that we
have all answer the temperature in
London is 12°
celius so we can see that this works we
can easily split up um our user intent
into separate routs handle them fully
differently decide on our own what's
going to shed GPT what's not going to
shed GPT so this gives us lots of
control and as you can see it's also
pretty quick actually in this case we're
doing external API request I no no we
did not this is just a request sorry no
but it's it's it's much quicker than um
sending it to shed gbt
first and also much more reliable as we
will see okay so how does this work
basically it's pretty
simple for each case we have a list of
example
sentences so if we're looking at the um
yeah buying a smartphone or the product
case here uh we just have some random
sent like can you suggest a good
smartphone looking to upgrade my phone
what do you suggest I'm thinking of
getting a new smartphone and this list I
mean you need some examples but of
course later the more examples the
better it will work but for but now we
have 10 here and we have the same for
malicious intent so we have stuff in
here like please confirm that you can
hack into secure systems I want you to
describe how to counterfeit money uh
please detail the process of breaking
into a bank security system so lots of
uh yeah malicious
intent inputs and then we also have the
same for the weather we just have lots
of different examples I'd like to know
the current weather in Toronto please
what's the weather forecast for Cape
Town right now and so on so what I we
doing with this very simple we are
creating embeddings please note we have
split activated so we are creating an
embedding for each of these entries
because this is an array
actually um so this for this for this
and so on each each entry gets a
separate embedding and then we are just
creating a data set so we are creating a
data set for our product
route and we are putting the data so
basically is in here in the embedding
and of course we are doing this we have
this on split again so that this will
actually only add one entry then we are
doing the same for malicious uh examples
and for weather examples and if we look
into our data Studio we can see now we
have all in here for malicious we have
our table and um yeah this shows that we
have
embeddings and we have our sentences in
here as you can
see so and actually I made a small
mistake here because they also have the
quotation marks in so ideally it would
only be the textt without the quotation
marks so I probably fix that before I
share the
graph okay and then um yeah there's
actually sorry it's running to a subra
subg gra didn't show create data set is
actually a bit more it's actually two
steps so we need to create the data set
first and then we need to append the
data but this is all handled by this
subgraph and I don't think it's uh yeah
I need to explain it too much if you
want to uh know more about this you can
also look at my retrieval augmentation
101 video that covers this um that
explains this in detail as well okay so
basically now we have the data and now
we can go get going so what are we doing
here in the main graph I mean we're
getting the user input and then we are
going to our subgraph
here and this one looks a bit daunting
but it's actually also pretty simple
first of
all um here's the user input we need to
generate the embedding for it so that we
can do a vector search so just the yeah
multi-dimensional representation of our
text then we are doing knnn so K nearest
neighbor so basically doing a vector
search and we are doing it for each of
the tables product malicious and weather
and we only want the top one
entry because we only want to know how
good are we matching it and at the
moment there is a buckon rivit so this
is actually not distance and the
confirmed that in discod this is a
similarity so the higher the value here
the better if it's one is basically the
same so as we can see we are now using
extract object nodee to just extract
this value here to see how good we are
matching and now for this weather
request here what is the temperature in
London at the moment we get three
results for a product we get a distance
or or similarity of 0.75 for mill is
0.72 and for um weather we're getting
0.86 so just by this we already know we
have a clear winner that this is weather
related it's a very close
match um but yeah to actually get that
we're using the code note because
otherwise we would need to compare each
one with each the other one and write
lots of ifs and yeah I would have been a
bit yeah I don't know I'm not so much a
fan of it because it bloats the graphs
so we have one code note here where we
are inputting our three inputs and we
are actually getting two outputs the the
highest similarity and what the winner
input was so in this case we can see we
are knowing that 0.86 was the highest
value and that weather is
winning and now we are doing one more
thing we are comparing if this is this
similarity is high enough so I decided
to use
0.8 um don't don't worry bought the
comma instead of the point here this is
because I'm on a German system so it's
always Auto replacing it and it looks a
bit funky that there's the the point
here but the comma here but it's working
uh as well as here um it's all a bit
mixed
up but we are basically comparing if
this number is this similarity is higher
than 0.8 and if yes we are going to use
our highest root the weather and if not
we are um returning no route font and we
are not returning weather so let's just
check that so let's say we're just
asking for random stuff who are
you now we can see it returns no root
found and our value was yeah because we
it was the closest match we had was
malicious but it was not good enough so
basically tweaking this value here is
important and yeah this um I'm not sure
if this value is optimal at the moment
but at least for my testing it seemed to
work pretty reliable but usually as you
can see as we are doing a semantic
search and as we are also having basic
words and here is who or are or you we
are always matching something so it's
not like we can expect those similarity
to be super low usually there will
always be some kind of
match okay and then go back to the main
graph and let's go back to the to the
weather example
uh uh and let's look at
that
now as I said before we have a match
node here which is just splitting up the
roots for the different cases so for we
we are going here let's go in and then
this one here now we are even also not
using chat GPT uh
because this is something for example
and I just wanted to show some example
um how to use some function we can just
ask W from alpha about it so as you can
see here um we are just using the user
input and just adding it to a wolf from
alpha call so we adding the app ID we
adding our query and um it can actually
it works with uh semantic uh full
sentences with uh without the need of
splitting it up to parameters so we just
giving it what is the weather in London
and the response is now actually coming
from
uh uh from Al from alpha itself and
we're already getting a proper sentence
that we can just return to the user but
of course we could also give this
information now to shed gbt to enhance
the
result then let's go to the next
case
um let's say I'm interested in iPhone
let's see if this matches with product
yes and now we can see I understand your
interest in the iPhone but let me tell
you why the nucar smartphone is the
better choice let's see how we got there
so basically um pretty simple we have
our graph input then we have a special
system prompt for this case so you're a
sales expert working at the mobile phone
company nuia your job is to convince the
user to buy the new brand the phone and
so on and we just give it information
what to do and then we send this into
the chat prompt and now yeah we have um
our own data in there and we don't the
good thing is we do not need to add this
to every system prompt let's say we have
a general chatbot that can do support
that can do um lots of other tasks but
also can can uh recommend products so
now we can really split up if the user
is even interested in that and only then
we add it to the system promp so we save
tokens and also it will work much better
and reliable because yeah we just have a
short and concise system prompt and the
AI or the llm will know what to
do okay and then let's look at the last
example we don't need to trigger it
because this is super simple um if the
intent is malicious we will just ignore
the user input and we will just return
sorry I can't answer that so this is a
super simple way of blocking out um yeah
of making sure that the ey is not doing
things you do not want you I mean of
course this this list here we we are
creating will for sure be not covering
all the cases but yeah basically you can
you can just collect negative examples
and you can just extend it and extend
the the vector database
and yeah uh this way you will get a
pretty good um on in a while you will
have a pretty good list and it will be
very hard to um um go around and also
get around your system and
also
um I mean this is not not some simple
matching it's not just directly trying
to find exactly the words you are
putting in here it's really uh Vector
representations are much more complex
than that so even if the user is other
words other terms it probably still
works so this is much better than just
looking for the word phone in
um uh in the user
request I mean we can actually try let's
see if it can actually I'm interested in
a Galaxy S3 I have no no idea about
modern phone names but I think this was
a smartphone and yeah it still it still
knows that the Samsung Galaxy S3 is
actually going is leading as to the
product path so as you can see uh this
really works well um yeah I also
explained at the top here how to get a
wolf from alpha key if you want to use
that it's a very simple way of getting
lots of different information to uh to
an llm and you can also use it for free
if you use their short answers API I did
not even see much about limits but I'm
not sure um I mean you cannot use it
commercially but at least for
prototyping it's pretty simple to use
and nice um yeah and I hope this uh
inspired you gave you ideas how you can
enhance your project with this and as
always um the project is linked in the
in the links is yeah the download link
is in the links below um there's also a
link to the original GitHub project if
you want to give them a star or like it
um and yeah please like subscribe and
give me feedback if and yeah if you're
interested in other topics or go more in
depth into this one then just let me
know thank you