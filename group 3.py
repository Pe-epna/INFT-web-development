# Lab3
# Group 3
# 2/21/2024
# INFT-1207
################
import unittest
from math import pi


def circle_area(rad):
    area = pi * rad ** 2
    area = round(area, 2)
    return area


def trapezium_area(a, b, h):
    return (a + b) / 2 * h


def ellipse_area(a, b):
    area = pi * a * b
    return area


def rhombus_area(p, q):
    return (p * q) / 2


def user():
    print("""
    Shapes:
    1. Circle 
    2. Trapezoid
    3. Ellipse 
    4. Rhombus""")
    while True:
        user_input = input('Which shape would you like to calculate the area of: ')
        if user_input == '1':
            para = input('What is the radius of the circle (one input): ')
            if para.isdigit():
                print(f"The area of the circle with radius {para} is {circle_area(float(para))}")
            else:
                print('Please input a real number')
        elif user_input == '2':
            para1 = input('What is the length of the first base of the trapezoid: ')
            para2 = input('What is the length of the second base of the trapezoid: ')
            para3 = input('What is the height of the trapezoid: ')
            if para1.isdigit() and para2.isdigit() and para3.isdigit():
                print(f"The area of the trapezoid is {trapezium_area(float(para1), float(para2), float(para3))}")
            else:
                print('Please input real numbers for all parameters')
        elif user_input == '3':
            para1 = input('What is the semi-major axis of the ellipse: ')
            para2 = input('What is the semi-minor axis of the ellipse: ')
            if para1.isdigit() and para2.isdigit():
                print(f"The area of the ellipse is {ellipse_area(float(para1), float(para2))}")
            else:
                print('Please input real numbers for both parameters')
        elif user_input == "4":
            para1 = input('What is the length of one diagonal of the rhombus: ')
            para2 = input('What is the length of the other diagonal of the rhombus: ')
            if para1.isdigit() and para2.isdigit():
                print(f"The area of the rhombus is {rhombus_area(float(para1), float(para2))}")
            else:
                print('Please input real numbers for both diagonals')
        else:
            print('Invalid input. Please choose a valid shape.')
user()