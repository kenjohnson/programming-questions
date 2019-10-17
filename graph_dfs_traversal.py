# Oct 14, 2019
# Graph traversal
# Depth first search

# Basic depth first search of a graph.

# This program traverses the graph and prints all the nodes

def dfs_util(g, v, visited_set):
   '''
   For the node that is passed into it, this
   function begins iterating through all the nodes
   in its list. The first time it comes across a
   node has not been visited, it calls this function
   again with that new node.
   '''
   # g - the graph
   # v - the node on graph
   # visited_set - list of nodes that have already been visited

   # Add current node to the visited set
   visited_set.append(v)
   print(v)

   # Go through the list of vertices, the first time
   # you find a node that has not been visited, call
   # this function again.
   for i in g[v]:
      if i not in visited_set:
          dfs_util(g, i, visited_set)

def graph_traverse(g):
   '''
   Iterate through all the nodes of the graph. 
   
   If the node has not been visited yet, then
   call dfs_util.
   '''
   # g - graph

   visited_set = []

   # For each node on the graph, if it has not been
   # visited yet, then call the dfs_util program
   # NOTE: Do not expect to iterate through every key
   #       in this loop, in fact, you probably will not
   #       iterate through very many keys, maybe 1, maybe 2.
   #       The reason is, once you call dfs_util, it will call
   #       itself many times.
   for i in g.keys():
      if i not in visited_set:
         print("calling dfs_util with ", i)
         dfs_util(g, i, visited_set)

def main():
   '''
   This function sets up the graph data structure
   and makes the intial call to graph_traverse to
   start traversing the graph
   '''

   # define graph
   g = {
       1: [3],
       3: [5, 4],
       4: [12],
       7: [3, 5],
       12: [5],
       5: []
       }

   graph_traverse(g)

if __name__ == '__main__':
   main()
   