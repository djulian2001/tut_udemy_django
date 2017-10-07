# PROBLEM one

print("PROBLEM ONE")
# given string:
s = "django"
# print following
print(s)
# d
print(s[0])
# o
print(s[-1])
# djan
print(s[:4])
# jan
print(s[1:4])
# go
print(s[4:])


r=''
for i in list(s):
	r = '{}{}'.format(i,r)
	
print(r)


b=''
for i in range(-6,0):
	b = list(s)[i]+b

print(b)

r2 = ''.join(''.join( list(s)[ i * -1 ] ) for i in range( 1, len(s)+1 ) )

print(r2)


print("PROBLEM TWO")

l = [3,7,[1,4,'hello']]
print(l)
l[2][2]='goodbye'
print(l)

print("PROBLEM THREE")

d1 = {'simple_key':'hello'}
print(d1['simple_key'])

d2 = {'k1':{'k2':'hello'}}
print(d2['k1']['k2'])

d3 = {'k1':[{'nest_key':['this is deep',['hello']]}]}
print(d3['k1'][0]['nest_key'][1][0])

print("PROBLEM FOUR")

mylist=[1,1,1,1,1,2,2,2,2,2,3,3,3,3]
print(set(mylist))

print("PROBLEM FIVE")
age = 4
name = 'sammy'
print("Hello my dog's name is {} and he is {} years old".format(name,age))