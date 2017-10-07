
class Sample():
  pass


class Dog():

  # class object attributes
  species = "k9"

  def __init__(self,breed,name):
    self.breed = breed
    self.name = name



class Circle():

  # there are better ways to do this....
  pi = 3.14  # ~

  def __init__(self,radius=1):
    self.radius = radius

  # methods for the class circle
  def area(self):
    return Circle.pi * self.radius**2

  def set_radius( self, new_radius ):
    self.radius = new_radius


# inheritances and special methods
class Animal():

  def __init__(self):
    print("Animal Created")

  def who_am_i(self):
    print("Animal")

  def eat(self):
    print('Eating')

class Dog(Animal):
  def __init__(self):
    Animal.__init__(self)
    print("dog created")

  def bark(self):
    print("woof woof")
  # the dog class will inherit the who_am_i and eat methods from Animal class


# looking into the dunder methods (aka special methods)
class Book():
  def __init__(self,title,author,pages):
    self.title = title
    self.author = author
    self.pages = pages


  def __str__(self):
      """this method is used when print is called, default is the class type, memory location, etc.."""
      return "title: {}, author: {}, pages:{}".format(self.title,self.author,self)

  def __len__(self):
      """This is the special method used from  len()"""
      return self.pages

if __name__=="__main__":
  x = Sample()
  print(type(x))

  my_puppy = Dog('pug','bucky')
  print(my_puppy.breed) # pug
  
  her_puppy = Dog('corgi','harry')
  # OR
  her_puppy = Dog( breed='corgi', name='harry' )
  print(my_puppy.breed) # corgi
