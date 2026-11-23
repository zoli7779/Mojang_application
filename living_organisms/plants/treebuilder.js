//first root
//then trunk
//then branches
//then leaves
//in case of collision one of the branch/leaf is deleted (partially randomly chosen/ partially the bigger tree ('stronger' trunk remains))
//in forest longer trees, branches start higher, shorter branches 

function root(){}

function trunk(){}

function branches(){}

function tree_hole(){}

function leaves(){}

function flower(){}

function seed(){}

function bracket_fungi(){}

function animals(){}

/*how are trees made?
1.main parts of a tree, root, trunk, branches, leaves, fruits
2.coordinate selection, suitable climate, not too close to each other, randomly, as densely as possible while still optimal
3.various sizes, avoiding collisions except during rare coalescences (when two trees merge)
4.both the root and branch systems operate using a space-colonization logic, but much more 
complexly, with multiple ramifications, continuing until all "loops" are closed
branching factor, taper factor
roots, leaves, and branches of different trees intertwine
5.both roots and branches will have different directions and models guiding their formation; the trunk is roughly a cylinder, 
but irregular, and may contain a hollow (cavity); where the trunk, roots, and branches originate
6.leaves on branches (distinguishing between branches and roots based on IDs)
7.fruits
8.descriptive equations for both leaves and fruit, with varying degrees of randomness
9.formation of the fruit around a line of symmetry
10.elasticity factor
*/