let's make a simple chat bot in Rivet
we'll start by adding a chat node as the
response from the AI right click or
press space and type in chat press enter
to add the node to the
graph next add a user input node so you
can type messages to the
chatbot edit the user input node and
enable the toggle at the bottom to get
its text from a connection we'll need to
pass the full chat history as well as
the user's message to the chat node so
add an assemble prompt node to combine
messages connect its output to the chat
nodes prompt so that we can send
multiple messages at a loop controller
at the beginning the first input of the
loop controller will be the last message
from the AI the second input will be the
entire chat
history add a prompt node to form the
first message from the AI edit it change
the type to assistant and type in some
greeting
text connect the prompt node to both
default inputs of the loop controller at
the beginning the first message is both
the last last message from the AI and
the entire message history connect
output one the last AI message to the
user input node connect output 2 the
full message history to the assemble
prompt node then connect the response
from the user input to the next Port of
the assemble prompt node to append the
user's reply we need to tag the AI
response as an assistant type so add a
prompt node with its type set to
assistant and connect the chat node's
response to it connect the prompt the
last message from the AI back to to
input one of the loop
controller add another assemble prompt
to assemble the new chat history connect
the previous assemble prompt and then
append the ai's response connect this to
input two of the loop
controller finally add a graph output
node to break the loop and allow the
graph to
run you're done press run in the action
bar to run your chatbot type in your
question and press submit when the AI
replies the user input will appear again
with the ai's response
next you can experiment to see what
kinds of things you can add to your
chatbot add a system prompt or generate
the initial message using another chat
node the possibilities are endless check
out the rivet documentation for
more