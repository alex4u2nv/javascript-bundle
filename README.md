# Javascript Bundling

This project provides an example Alfresco Module that will bootstrap javascript content into Alfresco. It can be used for bootstraping folder structure, and other various content into the repository via an AMP bundle

  - Boostrap Content
  - Bootstrap Java module
  - Example Service

This example uses the [Alfresco Maven SDK] and is configured against the Community Edition 4.2.e. To build the project against the Enterprise version, Alfresco One 4.2.2, the pom.xml will need to be updated from 4.2.e to 4.2.2. #NB the minor version being a number instead of a letter. 

For enterprise projects, it's recommended to request access to the [Alfresco Maven Enterprise Repository].

### Version
1.0.0

### Tech

This project is based on the following examples:

* [Alfresco Maven SDK] - Alfresco Maven SDK
* [Alfresco AMP] - The Alfresco Maven AMP Archtype
* [JDK 1.7] - Java Development Kit 1.7
### Building Project

```sh
$ git clone [git-repo-url] javascript-bundle
$ cd javascript-bundle
$ mvn package
ls target/*.amp
```

### Dependencies
* [Alfresco Maven SDK]
* [Maven]
* [Alfresco Maven Enterprise Repository]

### Run project:
```sh
$  mvn clean integration-test -Pamp-to-war
```
* Navigate to http://localhost/alfresco
* Login with: admin:admin
* Verify that javascript was imported into /Company Home/Data Dictionary/Scripts/


License
----

MIT



[Alfresco Maven SDK]:http://docs.alfresco.com/4.2/concepts/dev-extensions-maven-sdk-tutorials.html
[Alfresco Maven Enterprise Repository]:https://artifacts.alfresco.com/nexus/
[Alfresco AMP]:http://docs.alfresco.com/4.2/tasks/dev-extensions-maven-sdk-tutorials-amp-archetype.html
[Maven]:http://maven.apache.org/
[JDK 1.7]:http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html
[git-repo-url]:https://github.com/alex4u2nv/javascript-bundle
