FROM maven:3-openjdk-11

WORKDIR /app

COPY demo/* /app/

RUN mvn clean package

# EXPOSE 8080

# CMD ["java", "-jar", "target/demo-0.0.1-SNAPSHOT.jar"]