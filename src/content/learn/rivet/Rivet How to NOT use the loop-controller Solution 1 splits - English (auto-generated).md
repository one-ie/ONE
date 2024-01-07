hello and welcome to a mini tutorial
series on Rivet we will see how far we
go and how many parts we do but rivet is
a really cool tool but um the good thing
is that you can it's really complex so
you can basically do all the things you
want and you can do it in lots of ways
the bad part of that is sometimes it's
confusing to to know what what is the
best way and some of the obvious looking
ways like if you want the loop like if
it's a for Loop or while loop you will
always lose the loop controller actually
probably not the best ways and yeah
that's what this video is about we are
going to look at some typical a typical
case for a for Loop um where we
have um yeah we know how many iterations
we want to do and we want to iterate
over something which is a typical
situation to use it and yeah let's just
jump straight in um basically we will
look at three things we first look at um
yeah uh three we three examples we go
grocery shopping I will explain what
what this means in a second and first of
all we will look at the um the loop
example the traditional one then we will
look at the same thing without a loop
and then we will extend this a bit to
show you that it's still possible to do
a bit more complex things even though we
are still not using the
loop yeah okay so let's get started
first first of all what does it mean we
are going grocery shopping it's pretty
simple we have a
list um of items we want to buy apples
bread milk eggs and cheese and so
basically we're building an
array and I mean at the moment we are
not doing much more in this Loop than
taking off the items it's very simple
and very basic but it's a good start to
to take a look at um so let's take a
look at this here this is our Loop
controller and yeah as you can already
tell it's not exactly self explanatory
because yeah I mean you can see our list
of arrays is going in here as a default
of data one that is still pretty clear
but if you look here then there's later
there's pop going in and there's pop
question mark going out and there's
array question mark going out um so I I
will not try to EXP explain to you but
you will see this is some of the reasons
why I think it's better not to use it
because in the end especially if this
gets bigger you or it's harder and
harder to understand and maybe you still
know what you're doing when you build it
but once you need to change something
extended you are going to have a bad
time okay but let's keep it so we are
moving our list or our array in here
this is what we want to
iterate um so let's first look into the
loop itself what it does
so here is our input from data one is
coming out and in the first iteration it
will be just our shopping list as we
built
here and now we pop the first item from
the front so the first item of the array
will be our
apples and this is going down here and
we are building a custom text which just
said that apples have been added to the
card in the end in this case or whatever
item it is in the iteration and then we
actually create a new array which
consists out of some of data 2 input
which is at the beginning an empty array
as you can see here this is the default
for data 2 um so basically this will
first now just add this to to the array
and then we are moving this back into
the loop controller for the second
iteration so now we have this also in
here as a data input so this is our our
new list with the items we added to the
card or new
array okay and what we of course also
need to do is we need to check if when
when we need to stop the loop so what we
are doing here is after we popped the
first item from the from the array from
the front so we took that out we will
look at the rest of the items so
basically we have everything left but
apples now we have bread milk X and G's
here in the first
run and then we put this to a new array
again
and we are taking the length of the
array so that we know how many items we
have left and we are comparing if our
items are still yeah bigger than zero
because then this is connecting to the
continue port and then we will continue
the loop controller once our items are
um uh yeah uh this condition is not true
anymore then the faults will be sent in
and that means that we are going to
break the loop controller and we are
finally getting
here so let's start this
up and as you can see uh as a result we
just have our new array which just
states that apples were added to the
card bread was added to the card milk to
the card eggs to the card cheese to the
card um and let's be honest this is a
lot of work for for just that don't you
think so do so so let's look at
something
simpler let's look at the first non-loop
example the only thing the only small
complexity that's coming in now that we
also need to learn how to use subgraphs
but it's it's also just if you know it
it's pretty simple it might just be uh
not obvious when you see them first time
so but basically what we have now here
is we have the same inputs we are
building our array for The Chopping list
and if you want to simplify this
um we could also just add an object so
if you know Json not uh Json notation
you could just add this Json object in
here and just connect that so you could
actually make already all this here
obsolete because it's let's be honest
this is not also a lot of stuff for such
a simple
thing and what we can see here now this
is going to a subgraph and then there is
an
output so um first let's show you what a
subgraph
is let's get in a subgraph is
basically um just like any just normal
graph but usually I mean it doesn't need
to have it but usually you can have one
or more graph inputs and one or more
graph
outputs uh yeah small note those colors
here are not usual I just like to add
them because it's if it's getting a big
graph you can clearly see what the
inputs the outputs are where they are in
the graph so I like to color code it all
a bit same actually for the subgraph
here I like to make subgraphs yellow so
I always see if something is going into
a
subgraph but basically for this one here
we created an graph input called item
and engra a graph output called
output and what this now means is if we
go to
subgraph here then first of all you see
nothing so it's bit so you need to go to
the configuration but now you can select
a graph and now we can select this
subgraph here and then it will
automatically have this
input as you decided on the output so
it's actually pretty custom thing you
can create as many inputs as you like as
many outputs as you like and I mean you
don't need to have an output you can
also have a subgraph without an input
but then it will just run automatically
once you start the graphics in um yeah
okay so now there's one thing which is
very uh which is yeah the the secret
Source in here because let's say we
would just throw this array in here
let's actually do this let's first move
it out let's just throw the array in
here let's the sub graph make its magic
and then we have uh yeah we have
something pretty odd we have added
apples bread milks egg cheese to the
card so we just threw the whole array in
at once and we added
text around the array that's that's not
what we wanted we want to check off each
item separately so how can we do that
there is this yeah this really not very
well explained feature here which is
called
split once we put this on any array
input that we use like this one here so
our grocery list will be split and this
subgraph is now going to be called for
each
item so let's run it one one more
time and now we can suddenly see oh yeah
now we added apples to the card we added
bread to the card we added milk to the
card and so on so this is the only small
thing we need just this one check mark
here and any array you ever have will
automatically be put uh being being sent
as every single item will automatically
be sent to a
subgraph uh and being run once so
basically um that is the the absolute
simplest way we can ever create a for
Loop um and iterate over those items so
now you can also if you think it's
necessary you can also make the
sequential this is even running in
parallel at the moment which is of
course quicker and you can also have
like for the loop controller itself to
you can also say what the Mex um
iterations or in this case more like
what are the Mex items so if we put this
only to like let's say
free then we can see here that we only
took the first three
items so let's move it back because we
need a higher
number and let's go one more time to the
subgraph and now instead of having all
those complicated things of creating a
new array removing things from the first
array I mean what we can do now for this
use case is we we don't have to do
anything we can just decorate the text
and put it to the output because yeah
now we are adding this to the card and
what's pretty cool if you want to debug
this is maybe on one of the runs
something happened you can you can see
the executions you can and you can
change them here you can change even for
all the notes so this is the first
execution there was Apples added apples
to the card and the output is also added
apples to the card but you can go to the
second and you can also switch it for
each note separately so it's really easy
to look at and it's really easy to
understand and that is the second reason
why subgraphs are good in general so
even if you would be using the loop
controller might still be recommended to
use a subgraph inside it to to simplify
the the process and to help you being
able to debug it but generally maybe
that is it should be is worth another
video on
itself okay now you say yeah I mean you
just removed all the the complicated
part of the loop that's why this is
simpler and I mean you're kind of right
so let's take a look at a more complex
example so in this case um we're not we
are going shopping but it's a bit more
realistic because of course we have a
shopping list that's okay we have we
still want the same items and I'm now
using the simplified uh way of building
an array here because I think it's
easier and it's nicer but well reality
hits hard we only have
$10 so most likely we cannot buy
everything on our
list and for that to be decided of
course we need to know the prices so
down here we have a price list now and
you can see cheese for example is $ or
whatever currency we like to see it in
bread is to and so on
so yeah now we have a bit more to do we
have to find the items on our list and
we also have to keep track of the budget
and once the budget runs out
then yeah we cannot of course not buy
everything anymore so basically this is
now a bit like a priority list uh
wherever our budget is is uh um not yeah
is is um exceeded then we need to stop
buying new
things let's run this quickly to show
you the examp the the uh result first
and we can see okay now we first added
apples to the card and we have a total
cost of
1.5 dollar then we added bread still
below 10 added milk still below 10 added
X but then the cheese yeah the cheese
was $3 so that would have put it to
$10.2 and yeah we did not add that to
the card because our budget was
exceeded so let's see how we did that
and first of all it's very important now
of course that we do this sequentially
because if we do it in parallel then
yeah everything gets thrown into the
card at the same time and there's no way
we can tell what exceeded the budget so
in this case uh this check mark here is
really
important and as you can already tell
here we now also have more inputs we
don't have just the item we also have
the budget and we have the price
list and please note those are not
arrays so this is an array and this will
be separated when we put it in so apples
first then bread then milk this number
here will always be the same and this
object here too let's look at this in
the subgraph
so let's look at the inputs first and
let's go to the first
one so as I I said before we can see
apples is coming in as an item the price
list is the full price list and our
budget is 10 and that is the same for
every
run this changes those two stay the same
because they are not erased they do not
get split so you basically have full
control if you want to put multip arrays
in there that are supposed to be split
then this also
works okay and now of course we need to
do a bit more actions here and you can
see it's already getting a bit more
chaotic and honestly speaking this could
already maybe call for another subgraph
inside this graph to make it even more
yeah easier to understand and read and
handle in the future but let's just take
a look so the first thing we are doing
we need to get the price for the list
item
and for this we actually need to match
our key which is in this case for
example milk in this list to get the
value for it so
2.5 and that is um the note that allows
us to do is is the extract object path
note now we
also um check this yeah not okay
actually there is now at least a a text
if you hover it but this not very clear
check Mark here um um because this
allows it to also have uh the path here
as an input let's put it off just to
show you now the path would need to go
here and then it would be hardcoded so
we cannot uh change it with every item
but we need it is here so let's
reconnect and basically what we are
doing here is we are creating our path
this is Jason uh yeah this is also some
uh way to to toh get things from
adjacent object if you don't know this
syntax um basically you can just ask CET
GPT to to write it for you it's not too
complicated but basically yeah from from
our object on the on the first level we
are looking at the key milk and then we
want the results from that and as you
can see here this extract object path is
now returning us to 2.5 so this is the
correct price for milk in here
then of course now we need to somehow
get keep track of uh the total sum we're
at and for that we are asking we are
getting the value from a global
variable of course in the first run this
variable has a value of zero because um
we never set it but we put it to type
number so the default value that's being
returned is zero as you can see here
and then we are adding this to our price
we just found for our first product so
basically at the moment we're at
$1.5 so if we look at this in a in the
next iteration or let's take the milk
example from before then we found the
price of $2.5 for the milk we already
have um used $3.5 of our budget so in
the sum at the moment if we would buy
the milk we would get to
$6 and basically this here is now
allowing us to check if we can actually
buy this item or if we already exceeded
the
budget so there is a simple U thing here
which is just a comparison we are
comparing if a which is our current
budget if we bought the last item is
still uh is exceeding or is still be
lower sorry it's still the same or lower
than our budget so if six is smaller or
equal equal to 10 basically and as we
can see here for the milk this is true
we are still going
on and then we are using
this uh putting this into an if else
node this if else node helps us to split
um now send different results forward
depending on
this basically it's it looks a bit maybe
a bit daunting as well but it's pretty
easy um
so we're putting this true or false
value into this if else here and then if
it's true so like here currently it's
true then we will take the value from
here so we will take this six and move
on with that and if it's false then we
will use the uh previous budget because
we were not able to add the
item so let's look at this how this
looks for the case of cheese which did
not fit into all budget so now we we
calculated that we would get to
10.2 so in this case this output is
false and that means that the if else
node is using the value from the false
input Port which is the total cost up
here the current total cost so what um
what how much we already used from our
budget okay now
finally uh there's also the part where
we actually setting this Global variable
which we previously
already um got a value from here so we
are now
updating um our budget value and in this
case as we were not able to buy the
cheese we are basically putting in the
same value as it was before
7.2 but let's go
back uh in the previous case here our
old value was six and we now bought
bought what did we buy we bought X for
$1.2 so we got went up to 7 .2 and we
edit this and we save this
here okay and now
basically we are creating two texts and
we are just always creating them so
basically as you can see here we we
created a text that we added x to the
card and what our total cost are and we
created a text that we did not add them
to the
card H but we are not always using both
of them that is the trick how it's
working because now we are just doing
another if else
Port we are again checking if you look
at the yellow line the same compare as
before we are checking if this item
still fits into our
budget and if it's true we will use this
text here that we edited and as you can
see we have variables in here for item
and total cost so those values are
Dynamic and will be
correct and in the case of
fults like for GES we will take that uh
this input here and now we will add this
text and then we go to the
output okay
um this is the first video I'm doing so
I hope this was helpful it's hard to
tell uh maybe it was too much um maybe
you guys are like this is so so obvious
and so simple why are you doing this
maybe my camera quality sucks maybe you
could barely hear me um leave me any
feedback I would be very uh uh yeah I
would really like you to I would be yeah
liking it if you give me some some
feedback on how I can improve this um of
course if you like to want to give me a
like or subscribe that would be super
nice um and if you want to see more or
have either ideas or even better
solutions for this then also please just
write me in the comments or in the rivet
Discord thank you very much guys see you