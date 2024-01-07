so just recently openai announced that
chap GPT was going to start supporting
images
but did you know the gpt4 has actually
been able to support images in some form
from right when it was released you just
need to know how to ask it
so let's jump in here and say hey
draw me a stick figure in SPG
and
we're gonna send it through and sure
here is a simple stick figure in SVG and
it's coming out with this XML format
called SVG where you describe shapes
lines and colors and things like that
and it assembles them into
an image
and great there is how you make gpt4
draw a stick figure
so I'm Kai Google I'm the Chief
Architect at Ironclad and a contributor
to rivet which is on the screen right
now it's a visual programming
environment for AI and it's open source
so let's talk a little bit about drawing
Wizards and not just stick figures with
gpt4 and rivet first I'm going to touch
on why I'm so excited about stick
figures
then why gpt4 is more than just a large
language model and then we're going to
actually draw some Wizards with not only
gpc4 but also Cloud 2 and GPT 3.5 and
we're going to end by talking about why
multi modal models are really exciting
and what they mean for the future
so let's dive in so first why am I so
excited about this stick figure well if
you think about it large language models
are all about predicting the next word
in a natural language sentence and so
the idea that you can take something
like gpt4 and have it understand this
weird SVG format for describing shapes
and geometries and actually get anything
sane is pretty cool
but there's even more going on here
because while we traditionally think of
gpt4 as a large language model as
opposed to say the text to image models
of mid-journey or Dolly actually gpt4
was trained not only on Text data but
also on image data making it a
multi-modal model
and the hope I think there was to make
sure that gpd4 could maybe have some
intelligence about spatial reasoning
geometry symbolic representation things
like that and from this it seems like
there was some success there
so GPT for more than just a large
language model
but how do we know that it's this is not
just gpt4 regurgitating some SVG that it
found on the internet one time for a
stick figure
well
we don't but what we can do is we can
actually give it a task that will
require it to understand something about
the stick figure
so let's ask it to
turn this man
into a wizard
and we're actually going to give it the
SVG that it generated
and we're going to feed that SVG and the
command into gbd4
so as we're doing this let's think about
as humans what would we do in order to
turn this man into an SVG
well I would think about actually adding
a little hat to the top of the head
maybe a wand or a staff or something and
uh
yeah that that's
probably what I would do
so
G2 PNG
let's see what gpt4 decides to do
okay so to turn this man into a wizard
we can add a hat and a wand to the scg
all right pretty cool
so there's our stick figure turned into
a wizard by adding that triangular hat
and a little wand so yeah this is
pretty cool because you know as humans
we look at these representations and
clearly they're not photographically
accurate but we think there's the head
there's the arm and where does the Hat
go where does a wand go and arguably it
looks like gpt4 has the same level of
understanding
and not only that it's doing it in this
like weird format called SVG and so so
cool to see that
so it's super cool that a large language
model for predicting the next word in
the sentence is actually able to also
apply that same kind of reasoning to
visual representations
but is that kind of like image data that
gpt4 was trained on is the
multi-modality of gpt4 actually that
special
well let's look at how other models
perform with this task
so we're going to downgrade to 3.5 turbo
give it some more tokens
and let's actually see how LGBT 3.5
handles this
all right to turn the man into a wizard
add some wizard accessories with a hat
and a wand
okay
so
it knew kind of the language part of how
to how to do things but when it came to
actually the spatial reasoning
I don't think that we can say that GPT
3.5 successfully turned the stick figure
into a wizard
well what about Claude
all right so Claude is able to take the
SVG and say that it's going to transform
it into a wizard
but once again a little bit like 3.5 I
don't think we would say that it
successfully turned the stick figure
into a wizard but again this is a very
unfair task because Claude and GPD 3.5
were not trained on image data so
there's no
apparent way that they should have an
understanding of kind of spatial and
geometric reason reasoning but it's also
why I think that this multimodality of
gpt4 is actually so darn cool because it
was able to do that and we were able to
actually get a result that feels very
very human
so I'm going to switch back to gbt4
right now so that's how you draw a
wizard with gpt4 and a little bit about
gpt4's multi-modality
and I hope you are now a little bit more
or almost as excited as I am about what
multimodal models are going to bring to
AI because as these models are able to
reason about geometries about images but
also understand text and reasoning and
language suddenly the world of
possibilities for what they can approach
and help with is just wide open
I also hope that maybe you're excited to
jump in and play around a little bit
more with this example again we built
this in Rivet which is an open source
visual AI programming environment
what I really love about it is that some
of these research papers and things that
you read about can actually come alive
on screen in front of you just the way
that this did and to give credit where
credit's due I didn't come up with the
idea of drawing Wizards in SVG format I
first heard about this idea from a
Microsoft research paper called Sparks
of AGI that was released in March and
there's an excellent lecture that goes
into not only how to draw unicorns
actually with ppt4 but also a number of
other really cool properties of the
model that many of which haven't
actually been fully realized or explored
yet
so thank you very much for watching I
hope you learned something and stay
tuned for more content in Rivet