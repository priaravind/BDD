package StepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class loginstepdefination {
	
	WebDriver driver;
	
	@Given ("^the user is on demo.automationtesting home page$")
	public void user_is_on_homepage()
	{
		System.setProperty("webdriver.chrome.driver","G:\\java\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://demo.automationtesting.in/");
	}
	
	@Then ("^user clicks on Skip Signin button$")
	public void user_clicks_skipsignin()
	{
		driver.findElement(By.xpath("//button[@id='btn2']")).click();
	}
	
	@When ("^user is on Register page$")
	public void user_is_on_registerpage()
	{
		driver.getTitle();
		
	}
	
	@Then ("^user enters the \"(.*)\" and \"(.*)\"$")
	public void enter_text(String Firstname, String Lastname)
	{
		driver.findElement(By.xpath("//input[@ng-model='FirstName']")).sendKeys(Firstname);
		driver.findElement(By.xpath("//input[@ng-model='LastName']")).sendKeys(Lastname);
	}
	
	@Then("^user clicks on Submit button$")
	public void clicks_submit()
	{
		driver.findElement(By.xpath("//button[@id='submitbtn']")).click();
	}
	
	@Then ("^Close the browser$")
	public void close_browser() throws Exception
	{
		Thread.sleep(5000L);
		driver.close();
	}
}
