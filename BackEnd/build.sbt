name := """play-java-starter-example"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayJava)

scalaVersion := "2.12.6"


crossScalaVersions := Seq("2.11.12", "2.12.4")

libraryDependencies += jdbc
libraryDependencies += "org.assertj" % "assertj-core" % "3.6.2" % Test
libraryDependencies += "org.awaitility" % "awaitility" % "2.0.0" % Test

libraryDependencies ++= Seq(
  "org.mongodb.morphia" % "morphia" % "1.3.2",
  "org.mongodb" % "mongo-java-driver" % "3.2.2"

)

val appDependencies = Seq(
  "org.hibernate" % "hibernate-entitymanager" % "3.6.9.Final"
)


libraryDependencies += guice

// Test Database


// Testing libraries for dealing with CompletionStage...









