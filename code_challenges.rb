# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest.

fullArr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# Expected output: [-9, 7, 9, 199]
fullArr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# Expected output: [-823, 7, 23]

def odds_ascend array

    numArr = array.select do |value|
        if value.is_a?(Integer) && !value.even?
            value
        end
    end
    numArr.sort
end

p odds_ascend fullArr1
p odds_ascend fullArr2

# Deven's way of solving
def nums_only arr
    arr.select {|x| x.is_a?(Integer)}.sort.delete_if &:even?
end

# Elyse's way of solving
def nums arr
    odd_array = arr.select do |val| 
    if val.class == Integer
        val.odd?
    end
    odd_array.sort
end



# --------------------2) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_a = 'a'
# Expected output: ['tea', 'water', 'soda water']

def contain_letter array, letter

    array.filter do |x|
        if x.include? letter 
            x
        end
    end
end

p contain_letter beverages_array, letter_o
p contain_letter beverages_array, letter_a




# -------------------3) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def no_vowel string

    string.delete "aeiouAEIOU"

end

p no_vowel album1
p no_vowel album2
p no_vowel album3

# --------------------4) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a get_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike 

    attr_accessor :model, :wheels, :current_speed

    def initialize model
        @model = model
        @wheels = 2
        @current_speed = 0
    end
    
    def get_info
        "The #@model bike has #@wheels wheels and is going #@current_speed mph."
    end

    def pedal_faster acc
        @current_speed = @current_speed + acc
    end

    def break br
        if @current_speed > 0
            @current_speed = @current_speed - br
        end
    end
    
end

trek = Bike.new "Trek"
p trek.get_info



# -------------------5) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0

p "Current speed starts at zero"
p trek.current_speed
p "Speed up 5 mph: "
p trek.pedal_faster 5
p "Speed up 5 mph more: "
p trek.pedal_faster 5
p "Speed up 5 mph more: "
p trek.pedal_faster 5
p "Your current speed: "
p trek.current_speed
p "Break 10: "
p trek.break 10
p "Your current speed after the break: "
p trek.current_speed

# Nick's version of doing the initialize method
# class Bike_two

#     def initialize model, wheels=2, current_speed=0
#         @model = model
#         @wheels = wheels
#         @current_speed = current_speed
#     end
    
#     def get_info
#         "The #@model bike has #@wheels wheels and is going #@current_speed mph."
#     end

#     def pedal_faster acc
#         @current_speed = @current_speed + acc
#     end

#     def break br
#         if @current_speed > 0
#             @current_speed = @current_speed - br
#         end
#     end
    
# end

# trek = Bike_two.new "Trek"
# p trek.get_info