# Hiiiii, this is the code challenge for CSC309 Week 12.

This code challenge is designed to help you review how to write API calls and connect the frontend to the backend. It does not count toward your grade, so feel free to modify and explore it on your own.

## Structure

This repository includes two folders: backend and frontend. Each one is an independent Next.js project (yes, it’s a monorepo).

Inside frontend/app/user-center/page.tsx, there is a button that sends a request to backend/app/api/payment. However, the backend API is incomplete, so you’ll need to revise it based on your understanding.

## Code Challeng Details
In Part 1 of our project, we created a credit card validation API that only checks card information. In reality, most companies use a third-party payment system because it is more secure, saves time, and reduces risk. In this code challenge, you must use the CSC309 Payment API to complete your own backend API. The response from your backend API call should depend on the response from the CSC309 Payment API.

Check https://309paymentapi.vercel.app/ for CSC309 Payment API details.