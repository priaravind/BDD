package testrun;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
			
			format= {"pretty","html:report/html","json:report/json/cucumber.json"},   
				tags={"@tst"},
				features="src/main/java/Cucumber",
				glue= {"StepDefinitions"}
			
			/*format= {"pretty","html:report/html","json:report/json/cucumber.json"},////this is a standard command , here normally the cucumber report will be in json format, hence we are converting it into html pretty format    
				tags={"@tst"},  //tag provided in the feature file for each scenario .. multiple tags can be given in a feature file for one scenario, what tag is called here will be mapped with the scenarios and the respective scenarios will get executed
				features="src/main/java/Cucumber",  // location path of feature file
				glue= {"StepDefinitions"}  //package name where stepdefeination program is coded*/
			)

public class cucumberrun extends AbstractTestNGCucumberTests
{
}
