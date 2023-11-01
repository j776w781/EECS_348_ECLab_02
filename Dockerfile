# Set the base image to use
FROM gcc:latest
# Copy the C program into the container
COPY problem_2.c .
# Compile the C program
RUN gcc -o problem_2 problem_2.c
# Set the command to run when the container starts
CMD ["./problem_2"]