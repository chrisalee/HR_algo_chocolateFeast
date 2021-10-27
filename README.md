# HR_chocolateFeast
https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/


Little Bobby loves chocolate. He frequently goes to his favorite  store, Penny Auntie, to buy them. They are having a promotion at Penny Auntie. If Bobby saves enough wrappers, he can turn them in for a free chocolate.

Example



He has  to spend, bars cost , and he can turn in  wrappers to receive another bar. Initially, he buys  bars and has  wrappers after eating them. He turns in  of them, leaving him with , for  more bars. After eating those two, he has  wrappers, turns in  leaving him with  wrapper and his new bar. Once he eats that one, he has  wrappers and turns them in for another bar. After eating that one, he only has  wrapper, and his feast ends. Overall, he has eaten  bars.

Function Description

Complete the chocolateFeast function in the editor below.

chocolateFeast has the following parameter(s):

int n: Bobby's initial amount of money
int c: the cost of a chocolate bar
int m: the number of wrappers he can turn in for a free bar
Returns

int: the number of chocolates Bobby can eat after taking full advantage of the promotion
Note: Little Bobby will always turn in his wrappers if he has enough to get a free chocolate.

Input Format

The first line contains an integer, , the number of test cases to analyze.
Each of the next  lines contains three space-separated integers: , , and . They represent money to spend, cost of a chocolate, and the number of wrappers he can turn in for a free chocolate.

Constraints

Sample Input

STDIN   Function
-----   --------
3       t = 3 (test cases)
10 2 5  n = 10, c = 2, m = 5 (first test case)
12 4 4  n = 12, c = 4, m = 4 (second test case)
6 2 2   n = 6,  c = 2, m = 2 (third test case)
Sample Output

6
3
5
Explanation

Bobby makes the following  trips to the store:

He spends  on  chocolates at  apiece. He then eats them and exchanges all  wrappers to get  more. He eats  chocolates.
He spends his  on  chocolates at  apiece. He has  wrappers, but needs  to trade for his next chocolate. He eats  chocolates.
He spends  on  chocolates at  apiece. He then exchanges  of the  wrappers for  additional piece. Next, he uses his third leftover chocolate wrapper from his initial purchase with the wrapper from his trade-in to do a second trade-in for  more piece. At this point he has  wrapper left, which is not enough to perform another trade-in. He eats  chocolates.
Language
JavaScript (Node.js)

More
40414243444546474849505152393836373532333428293031272625
    eatenCount = uneatenCount;
    wrapperCount = eatenCount;
    uneatenCount = 0;
    
    while(wrapperCount >= m) {
        uneatenCount = Math.floor(parseInt(wrapperCount / m));
        wrapperCount = wrapperCount % m;
        eatenCount +=uneatenCount;
        wrapperCount +=uneatenCount;
        uneatenCount = 0;

const chocolateFeast: (n: any, c: any, m: any) => number
Line: 46 Col: 14

Submit Code

Run Code

Upload Code as File

Test against custom input
Problem Solving
You have earned 25.00 points!
You are now 1292 points away from the 6th star for your problem solving badge.
4%908/2200
Congratulations
Share on FacebookShare on TwitterShare on LinkedIn
You solved this challenge. Would you like to challenge your friends?
Next Challenge
Earn a certificate in Problem Solving
Kudos on your progress! Take the HackerRank Skills Certification test and enrich your profile

Get Certified

Test case 0

Test case 1

Test case 2

Test case 3

Test case 4

Test case 5

Test case 6

Test case 7

Test case 8

Test case 9

Test case 10
Compiler Message
Success
Input (stdin)

Download
200
16809 123 11668
20373 18211 10188
92512 413 33040
2339 4 1337
96741 945 77194
53270 182 30238
47733 230 4840
60751 346 20578
19150 99 2945
94566 514 47583
17274 5234 12885
39478 364 23991
46052 388 43028
21816 14645 1827
98573 74120 44437
47151 78 28526
18991 78 10010
28583 113 5299
34587 86 33334{-truncated-}

Download to view the full testcase
Expected Output

Download
136
1
224
584
102
292
207
175
193
183
3
108
118
1
1
604
243
252
402
2{-truncated-}

Download to view the full testcase
Hidden Test Case
Use print or log statements to debug why your hidden test cases are failing. Hidden test cases are used to evaluate if your code can handle different scenarios, including corner cases.

Contest CalendarBlogScoringEnvironment
