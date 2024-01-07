"So on December 13th, Google drops the APIs for Gemini Pro Vision."
And we got super excited.
"So Gemini is a large language model, just like GPT-4, and also just like GPT-4."
"It's actually multimodal, which means that it was trained not only"
"on language, but also on images."
"Of course, we immediately went to work, integrating Google Gemini into Rivet"
so that we could play around with it.
And I'm excited to share some early thoughts on how it's working
and how it compares to GPT-4.
"So to start with here's a Rivet graph, very simple."
We have an image of my dog.
We have the chat going into both GPT-4 on the right and
Gemini Pro Vision on the left.
So let's go ahead
and here we have.
Both.
GPT-4 vision.
And Google Gemini Pro Vision.
"And as you can see , GPT-4 vision, a little chattier, talking"
about medium size fluffy dog.
And here we have a small dog with a gray and white coat.
"So, for this kind of a descriptive thing, both Gemini"
and GPT-4 seem to be doing well.
"I'm not going to push much further in this direction, because I want"
to look at some other things.
"So in particular, I've been kind of interested in looking at whether"
GPT-4 and any of these vision models can actually reason spatially.
Here I have a weird Sudoku puzzle.
And I'm going to ask.
Both.
Gemini and GPT-4 to convert it into a text representation.
And I've already asked it to do some chain of thought reasoning and stuff
"like that, but let's see how they do."
Okay.
So Gemini Pro coming back first saying it's a four by four
grid with three given numbers.
I don't know why it thinks there are three given numbers.
And we can represent it as a text string.
The text representation is this.
I don't know if this is too small to see.
But it's getting that two and three are here and it's getting that foreign
one and two are in the next row.
"And it's getting one in three and three, but it's kind of, it feels"
like it's got like a very fuzzy view on where exactly these numbers are.
"Similarly, GPT-4 vision actually does a better job in that almost"
everything is correctly placed.
But you'll notice in the third row that it's got a three in the wrong place.
So.
A little bit weird.
But it feels like GPT-4 vision doesn't really know exactly where
"things are  in relation to each other, but has like this vague sense."
And they can like pick out letters and numbers really well.
"Similarly though, Gemini Pro Vision doesn't seem to really have a"
"sense of where things are, even though it knows what letters and"
numbers are supposed to be there.
And then in what order.
So a little bit weird.
The final thing that I want to show is understanding parts of an image.
So I just swapped over to a different project and I'm running
out of a remote debugger now.
And here I've asked GPT-4 vision to circle the nose of this
"meme,  the ""Y U No Guy"" meme."
"And as you can see, it draws a circle in the wrong place."
But it's cool that it actually draws a circle.
All right.
Let's see what Gemini Pro does.
Interesting.
The nose is not included in this image.
"So I'm not entirely sure what to make of it, but I guess I'm sort of disappointed"
in Gemini Pro Vision at a first glance.
"It seems to do okay in terms of labeling images, but that's kind of"
"what these multimodal models, you would expect them to be able to do."
"And then in terms of spatially reasoning and transcribing things,"
"the Sudoku puzzle, that kind of feels like GPT-4 vision was doing"
better than Gemini Pro Vision.
"Not the most scientific test, but, not super positive for Gemini Pro Vision."
And then finally showing it the kind of graphical representation of a
"face,  albeit an illustrated face."
Gemini Pro Vision does not seem to recognize that there
even is a nose in the image.
Something that was sort of interesting.
I think that GPT-4 vision early on they were basically blurring any faces to
try to make sure that the model didn't do anything harmful around people.
Maybe Google is taking a similar approach.
And maybe what it's done is recognize the face here and just
like blurred the entire image.
"Um, but."
Who knows.
We can only speculate.
"Anyway, those are some quick thoughts on how Gemini Pro Vision compares"
to GPT-4 vision all using Rivet.
Really excited to continue testing here.
The plugin will be available soon.
You can turn on the plugin just by clicking on the plugins tab  and
then installing the Google plugin.
It'll be available soon.
We're still working out the kinks.
So excited to hear what you all think.
"If there's anything you want me to try with Gemini Pro Vision, let me know."
Thank you.