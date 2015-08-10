package com.angularjs.demo;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Service
@RequestMapping("/test")
public class TestService
{
	@RequestMapping(value = "/submit", method = RequestMethod.POST)
	@ResponseBody
	public Person submit(@RequestBody Person person)
	{
		person.setId("1");
		return person;
	}

}
