import unittest

def array_check(given):
  if 1 in given and 2 in given and 3 in given:
    return True
  else:
    return False

def string_bits( given ):
  return ''.join(''.join(given[i]) for i in range(0,len(given),2) )

def end_other( given ):
  if given[0].lower() in given[1].lower() or given[1].lower() in given[0].lower():
    return True
  else:
    return False

def double_char( given ):
  my_return=''
  for i in range(len(given)):
    my_return += given[i]*2

  return my_return

def no_teen_sum( given ):
  return sum([ i if i not in range(13,20) else 0 for i in given ])

def count_evens( given ):
  if given:
    return len([ i for i in given if i%2 == 0 ])
  else:
    return 0

class Test_Unittest(unittest.TestCase):
  def test_assert(self):
    assert True
  def test_assertFalse(self):
    self.assertFalse(False)
  # one
  def test_array_check(self):
    self.assertTrue( array_check([1,1,2,3,1]) )
    self.assertFalse( array_check([1,1,2,4,1]) )
    self.assertTrue( array_check([1,1,2,1,2,3,1]) )
  # two
  def test_string_bits(self):
    self.assertEqual( string_bits('Hello') , 'Hlo' )
    self.assertEqual( string_bits('Hi') , 'H' )
    self.assertEqual( string_bits('Heeololeo') , 'Hello' )
  # three
  def test_end_other(self):
    self.assertFalse( end_other( ("xxyyzz","aabbcc") ) )
    self.assertTrue( end_other( ('Hiabc','abc') ) )
    self.assertTrue( end_other( ('AbC','HiaBc') ) )
    self.assertTrue( end_other( ('abc', 'abXabc') ) )
  # four
  def test_double_char(self):
    self.assertNotEqual( double_char('The'),'end')
    self.assertEqual( double_char('The'),'TThhee')
    self.assertEqual( double_char('AAbb'),'AAAAbbbb')
    self.assertNotEqual( double_char('AAbb'),'AAAAbbb')
    self.assertEqual( double_char('Hi-There'),'HHii--TThheerree')
  # five
  def test_no_teen_sum(self):
    self.assertEqual( no_teen_sum( (1,2,3) ), 6 )
    self.assertNotEqual( no_teen_sum( (1,14,1) ), 16 )
    # false tests
    self.assertEqual( no_teen_sum( (2,1,14) ), 3 )
    self.assertEqual( no_teen_sum( (2,1,13) ), 3 )
    self.assertEqual( no_teen_sum( (12,20,1) ), 33 )
    self.assertEqual( no_teen_sum( (13,20,19) ), 20 )
  # six
  def test_count_evens(self):
    self.assertEqual( count_evens([]), 0 )
    self.assertEqual( count_evens([2,1,2,3,4]), 3 )
    self.assertEqual( count_evens([2,2,0]), 3 )
    self.assertEqual( count_evens([1,3,5]), 0 )


if __name__ == '__main__':
    unittest.main()