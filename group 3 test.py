# Lab3
# Eamonn Patterson
# 2/21/2024
# INFT-1207
#########################
import unittest
from math import pi


def circle_area(r):
    return pi * (int(r) ** 2)


def trapezium_area(a, b, h):
    return (a + b) / 2 * h


def ellipse_area(a, b):
    area = pi * a * b
    area = round(area, 2)
    return area


def rhombus_area(p, q):
    return float(p * q) / 2

class TestCases(unittest.TestCase):
    def test_ellipse_area(self):
        self.assertEqual(ellipse_area(1, 2), 6.28)  # first two parameters and the 6.28 is the expected output)

    def test_rhombus_area(self):
        self.assertEqual(rhombus_area(2, 3), 3.0)

    def test_circle_area(self):
        self.assertEqual(circle_area(7), 153.93804002589985)

    def test_trapezium_area(self):
        self.assertEqual(trapezium_area(4, 5, 6), 27.0)

if __name__ == '__main__':
    unittest.main()