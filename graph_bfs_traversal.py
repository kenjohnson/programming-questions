# Oct 14, 2019
# Graph traversal
# Breath first search

# The purpose of this program is to print all the nodes of the graph.
# To do this, we have to traverse the whole graph.
# we are using breadth first search.
# NOTE: if the whole graph is connected we will only have to
#      call the graph_traverse function once.


def graph_traverse(g, v, visited_set):
   '''
   For the node that is passed in, "v", iterate through
   all the nodes that it points to, and if any of those
   nodes have not been visited yet, then add them to the queue. 
   While there are still items in the queue, repeat this process
   for each item in the queue, until the queue is empty. 
   Then check if you have any remaining nodes. If yes, 
   then call this function again. Keep calling this function
   until there are no remaining nodes left. 
   ''' 
   
   # g - the graph
   # v - a graph node 
   # visited_set - nodes that have been visited

   print("ENTERING GRAPH TRAVERSE FUNCTION")
   s = []  # holds list of nodes to consider visiting
   s.append(v)

   # Other than the first item, this while loop iterates through dictionary
   # keys. Each iteration will go through the list
   # of values for that given dictionary key.
   while s:
      v = s.pop(0)  # take the first node from the queue
      if v not in visited_set:
         visited_set.append(v)
	    
         for u in g[v]:
            s.append(u)

   # Check if there are any remaining nodes, if yes,
   # then add those nodes to the remaining verticies list,
   # and call graph_traverse again. When you have no
   # nodes remaining then return the visited set

   remaining_vertices = []
   for i in g.keys():
      if i not in visited_set:
         remaining_vertices.append(i)

   if remaining_vertices:
      graph_traverse(g, remaining_vertices.pop(0), visited_set)

   return visited_set

def main():
   '''
   This function sets up the graph data structure
   and makes the intial call to graph_traverse to
   start traversing the graph
   ''' 

   #g - is the graph. We are using an adjacency list to
   #     represent the graph. The dictionary
   #     keys represent the nodes and for any key the value
   #     is a list of nodes the key points to.  
 
   g = {
       1: [3],
       3: [5, 4],
       7: [3, 5],
       4: [12],
       12: [5],
       5: []
      }


   #g = {
   #    1: [2],
   #    2: [11, 12, 13],
   #    3: [14, 15, ],
   #    4: [16, 17, 18, 19],
   #    11:[],
   #    12:[],
   #    13:[4],
   #    14:[],
   #    15:[],
   #    16:[1],
   #    17:[],
   #    18:[],
   #    19:[]
   #   }


   visited = []
   final_list = graph_traverse(g, 1, visited)
   print("The nodes are: ", final_list)

if __name__ == '__main__':
   main()
   