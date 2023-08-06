# FAKTORIO

**Invoice app created in NextJS 13**

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Launch](#launch)

## General info

This is my first personal project in NextJS 13. My main goal was to create my own app in NextJS using all its concepts.
I didn't want to duplicate another application rewritten from the online course. The challange was to come up with something that
is rarely used in other junior frontends portfolios like blog or e-commerce store and then idea of faktorio came up. Simple invoice app
where one can create an account, view statistics and charts of company invoices and process them withing app (approve, reject, ask colleagues for
more info, send to correct approver of costs etc.).
My first trouble started with how to store and retrieve PDF document with invoice in database. Then I figuread out that the best solution
for me will be uploading PDF to uploadthing.com and then store in database generated download link to this document.

## Technologies

- NextJS 13
- NextAuth
- MongoDB
- Mongoose
- TypeScript
- TailwindCSS
- Uploadthing
- React-pdf

## Launch

To run this project, visit [https://faktorio.vercel.app/](https://faktorio.vercel.app/) and log in to your google account.
