"Hi, welcome to another Rivet tutorial."
"And again, I want to talk about GPT 4 vision."
"So first I want to talk about what GPT 4 vision is, then what object"
"segmentation is, and then we're going to actually go ahead and try to get"
GPT 4 vision to do object segmentation.
I have no idea if that is actually going to work.
Spoiler alert turns out we weren't able to get GPT-4 to do object segmentation.
So if you're looking for a video with a satisfying
"conclusion, this ain't it."
If you're looking to learn some more about rivet and GPT 4 vision.
Stick around.
We've loaded in this picture of the most awesome dog in the world.
Her name is Bonnie.
And we're saying...
"Describe this picture in a sentence,  and GPT 4 vision is coming back with a person"
is holding a happy looking fluffy dog.
"GPT 4 is already  by many benchmarks, the most capable"
large language model out there.
"But some percentage of the training data was actually image data, which"
is super exciting because it means that it can actually interpret images.
"So, cool."
It can describe and caption images.
We're going to try to get GPT 4 vision to do object segmentation.
What that means is we're going to try to get it to actually draw some sort
of shape around something in the image.
So let's give it a shot.
Draw a box around the dog.
All right.
"I'm sorry, but I can't assist with that request."
"Okay, what if we took inspiration from GPT function calling?"
"Well, GPT 4 Vision doesn't actually support function calling, but"
we can fake it until we make it.
You have access to a set of commands for altering images.
"If you want to draw polygon, you have to draw"
polygon command.
"Okay, cool."
So we've told it that it has the draw polygon command and that can invoke
it by outputting a JSON format.
So let's see what it does now.
"Sorry, can't assist with identifying or making assumptions"
about elements within images.
"All right, so I'm going to try to work around this using a system prompt."
Let's tell it it's good as spatial reasoning and tell it that you can
draw polygons on images let's go ahead and attach the system prompt there.
"Okay, cool."
"Well, let's give it a shot."
"All right, cool."
So we convinced GPT 4 Vision to actually draw the polygon.
That's fantastic.
Now I wanna actually grab the polygon here and draw it into this image.
"Uh, so let's do that first we're gonna regex and we're gonna grab the"
"response, and our regex is gonna pull out this JSON format."
So.
"In order to do this,  I actually just go straight into chat GPT."
"Alright, so I've got that JSON to hit run and because I turned caching"
"on, this will run a lot faster."
But let's just make sure that I'm getting the JSON that I expect.
"Alright, cool."
Got it.
"And now, let's, uh, let's extract the JSON."
"And finally, we're going to do this, uh, weird thing where we"
actually call an external function.
"And the external call that I'm going to call, uh, I think it's called drawPolygon."
And I gave it a couple of arguments.
The first argument.
"is the image name,"
and the second argument is points.
"So, cool."
"Uh, I'm going to have to grab points from here."
"So, this is getting a little bit more complicated."
"Uh, I need an object path."
arguments.
"points,"
and then we're going to put the points into the
"objects, and then ultimately this is going to go into our DrawPolygon function."
And we need the image name as well.
So we'll grab the image name over here.
"And, uh, let's see how that goes."
Boom!
Alright.
"We're using PureImage,   to actually draw the polygon."
"And you can see because we're using rivet, it's really easy to"
just add external functions in.
"So over here, we're just decoding a JPEG from the stream, uh, doing,"
"filling a path with kind of a red 50 percent transparency, and"
then re encoding it to a JPEG and passing it back as an image object.
And that's what you're seeing here.
"Uh, so, cool, we could end here."
"GPT 4 vision, not very good at drawing a box around a dog."
But in fairness...
"As humans, we might not be so good at drawing boxes around dogs either"
let's maybe adopt this a little bit and see if we can get it to do
slightly better than it did right here.
"And in particular, the idea I want to test out is  maybe we can actually"
"get it to Adjust that polygon, to better fit around the dog."
So let's go ahead and try to prototype that.
We're going to put the loop controller in here.
The chat call is going to be the first thing that comes after it.
"Um, so we're going to need an  assemble prompt node."
"Uh, that's going to do this and this."
"And so this first set of inputs into the controller, that data is going"
"to be the messages, and then delete that, delete that, and now output"
one is going to go into the prompt.
Then what we're going to do is we're actually going to append
"this, uh, this subgraph, uh, and let's go ahead and do that."
So assemble prompt.
"I'm going to grab all messages, and so this is like the chat history, and then"
"message two, or rather message n, is going to be a, uh, assemble message."
"Yeah, actually that's going to work well."
"And then what we're going to do is we're going to have a prompt that says,"
now draw a more accurate bounding box.
Let's try it.
"All right, now that we have that, we're going to loop this back through."
"And, great, we have, we have our loop."
"Found a slight bug in LoopController, it needs, probably needs a control,"
but it also needs to actually use the output for something.
Otherwise it just decides not to run.
"All right, so let's go over one more time what's going on."
"So first, we are going to tell GPT 4 how it can draw polygons around images using"
our kind of makeshift GPT functions.
And we're going to give it a command to draw a box around the
dog along with the original image.
We're going to feed this into a loop controller.
It's going to go ahead and try to draw a box.
And then we're going to actually draw the box using an external function in Rivet.
"And then we're going to put these into the message history, and we're going to say,"
"here's your dog with the bounding box, now draw a more accurate bounding box."
Let's go ahead and run this.
"All right, there's the first bounding box."
Second bounding box.
It's getting farther away.
"Okay, it's getting worse and worse and worse."
Okay.
"So, four iterations and..."
"Yeah, it did not do great."
"Uh, all right."
"Well, we could stop here."
"Uh, or since we've already created this loop controller, maybe we should just take"
it one more step and see what happens.
Let's get it to do pseudo chain of thought reasoning.
"So, um, first, explain"
how the bounding box could be altered to be a bit more accurate.
Then
issue a draw polygon command to draw a better bounding box.
Let's see if that works.
"Again, it's getting worse."
"Okay, so let's actually look at the explanations it's giving."
"To create a more accurate bounding box, the box should"
be adjusted closer to the collar
This means the top of the box should be lowered.
To just above the dog's head and the bottom should be raised.
All right.
"So let's see on iteration two, it did lower the bounding box."
And it did raise the bounding box.
The size of the box should be brought in closer to the dog's
sides without including too much of the person holding the dog.
Okay.
So it brought everything in and then the next thing it said to further
refine top of the box should be just above the dog's head and the bottom
should align with the dog's belly.
"All right, maybe we can steer it a little bit."
First explain how the bounding box could be altered to be a bit more accurate.
Make sure to mention which sides of the blocks should be updated.
"What direction they moved in, and how much moved."
"Alright, this could get a little wordy, let's see."
"Alright, first bounding box."
Left side should be moved to the right.
I feel like it doesn't understand left and right.
Left side of the box is still a little bit too far left.
"All right, the right side of the box is now too close to the dog's"
fur on the right side and should be moved back to the right.
"It, it feel like it doesn't quite understand right and left."
"All right, so we're explaining to it where top and right is."
"Um, all right, so it sort of missed a lot, but it did something different."
"Okay, it's zeroing in on one of the arms."
Bottom side of the box should be moved up.
The top side of the box should be moved down.
"Alright, one more shot, let's go."
"Uh, it's getting worse."
So not every experiment goes particularly well.
", but let's just recap what we did anyway."
"We loaded in an image of the greatest dog in the world, into our rivet graph."
And then we actually put it into a loop.
We taught GPT 4 Vision how to use a drawpolygon command.
That it can issue as a substitute for GPT functions.
And then we tried to get it to draw a box around the dog.
"Um, when we put it  into GPT 4, we tried to guide it."
We experimented a bit with kind of chain of thought reasoning so that
it would iteratively try to move the box into a better direction.
But we consistently saw it get worse.
"As you can see, this is its first attempt."
"Second attempt, third attempt and fourth attempt."
And when we tried to get it to explain its reasoning and even after we tried to
"very explicitly tell it what directions were which in the image itself, we saw"
it just get confused about direction.
So here is.
"The image that this chat was interpreting, and we can see to better contain the"
"dog within the bounding box, let's make the following adjustments."
Left side should be moved to the right to exclude the person's arm.
It sort of feels like they've got right and left mixed up.
"Um, not really sure that we can surmount that."
"Uh, the right side of the box is fine as is."
It seems to contain the dog well.
I don't think that applies to either right or left side.
It just doesn't seem to have a good sense of directionality.
"I'm not sure if this is something that could maybe be, like, fine tuned in or"
"something like that, but overall, Not getting the effects that we wanted."
So this has been a fun experiment.
I'm not sure that we're going to be using GPT 4 vision for
object segmentation anytime soon.
But be curious if anyone else experiments with this and finds
better way of doing things.
Thanks.